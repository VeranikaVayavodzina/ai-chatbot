import { useEffect, useRef, useState } from "react";
import styles from "./Chat.module.css";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  type?: string;
}

interface UserData {
  email: string;
  role: string;
  position: string;
  department: string;
  uuid: string;
}

interface ChatProps {
  websocketUrl?: string;
  userData?: UserData;
}

interface WebSocketMessage {
  type: "initial" | "policy" | "state" | "request" | "mark";
  payload: any;
}

export default function Chat({
  websocketUrl = "ws://localhost:7999/ws",
  userData = {
    email: "user@example.com",
    role: "ARM",
    position: "developer",
    department: "Python",
    uuid: "123e4567-e89b-12d3-a456-426614174000",
  },
}: ChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [showPolicyDialog, setShowPolicyDialog] = useState(false);
  const wsRef = useRef<WebSocket | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (text: string, sender: "user" | "bot", type?: string) => {
    const message: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date(),
      type,
    };
    setMessages((prev) => [...prev, message]);
  };

  const sendWebSocketMessage = (message: WebSocketMessage) => {
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify(message));
      console.log("📤 Отправлено:", message);
    }
  };

  const acceptPolicy = () => {
    const policyMessage: WebSocketMessage = {
      type: "policy",
      payload: { accepted: true },
    };
    sendWebSocketMessage(policyMessage);
    setShowPolicyDialog(false);
    addMessage("Политика конфиденциальности принята", "user", "policy");
  };

  const connectWebSocket = () => {
    if (wsRef.current?.readyState === WebSocket.OPEN) return;

    setIsConnecting(true);

    try {
      const ws = new WebSocket(websocketUrl);

      ws.onopen = (event) => {
        console.log("✅ WebSocket подключен");
        setIsConnected(true);
        setIsConnecting(false);
        addMessage("Подключение установлено", "bot");

          // Отправляем инициализацию пользователя с небольшой задержкой
          setTimeout(() => {
            const initialMessage: WebSocketMessage = {
              type: "initial",
              payload: userData,
            };
            console.log("📤 Отправлена инициализация:", initialMessage);
            ws.send(JSON.stringify(initialMessage));
            addMessage("Инициализация пользователя...", "user", "initial");
            setIsInitialized(true);
          }, 1000);
      };

      ws.onmessage = (event) => {
        console.log("📥 Получено:", event.data);

        try {
          const data = JSON.parse(event.data);

          // Обработка разных типов ответов от сервера
          if (data === "success") {
            addMessage("✅ Успешная инициализация! Сервер готов к работе.", "bot");
          } else if (data.type === "policy_required") {
            setShowPolicyDialog(true);
            addMessage("Необходимо принять политику конфиденциальности", "bot");
          } else if (data.message || data.text) {
            addMessage(data.message || data.text, "bot");
          } else if (typeof data === "string") {
            addMessage(data, "bot");
          } else {
            addMessage(JSON.stringify(data), "bot");
          }
        } catch (error) {
          // Если не JSON, показываем как текст
          addMessage(event.data, "bot");
        }
      };

      ws.onclose = (event) => {
        console.log("❌ WebSocket отключен", event);
        setIsConnected(false);
        setIsConnecting(false);
        setIsInitialized(false);
        addMessage("🔌 Соединение закрыто сервером (демо режим)", "bot");
      };

      ws.onerror = (error) => {
        console.error("❌ Ошибка WebSocket:", error);
        console.error("URL:", websocketUrl);
        setIsConnected(false);
        setIsConnecting(false);
        addMessage(`Ошибка подключения к ${websocketUrl}`, "bot");
      };

      wsRef.current = ws;
    } catch (error) {
      console.error("❌ Ошибка подключения:", error);
      setIsConnecting(false);
      addMessage("Не удалось подключиться", "bot");
    }
  };

  const disconnectWebSocket = () => {
    if (wsRef.current) {
      wsRef.current.close();
      wsRef.current = null;
    }
  };

  const sendMessage = () => {
    if (
      !inputValue.trim() ||
      !wsRef.current ||
      wsRef.current.readyState !== WebSocket.OPEN
    ) {
      return;
    }

    if (!isInitialized) {
      addMessage("Сначала необходимо инициализировать пользователя", "bot");
      return;
    }

    // Добавляем сообщение пользователя
    addMessage(inputValue, "user");

    // Отправляем сообщение на сервер в формате request
    const requestMessage: WebSocketMessage = {
      type: "request",
      payload: { text: inputValue },
    };

    sendWebSocketMessage(requestMessage);
    setInputValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  useEffect(() => {
    connectWebSocket();
    return () => {
      disconnectWebSocket();
    };
  }, []);

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatHeader}>
        <h3>HR Bot Assistant</h3>
        <div className={styles.connectionStatus}>
          {isConnecting && (
            <span className={styles.connecting}>Подключение...</span>
          )}
          {isConnected && <span className={styles.connected}>●</span>}
          {!isConnected && !isConnecting && (
            <span className={styles.disconnected}>●</span>
          )}
        </div>
      </div>

      <div className={styles.messagesContainer}>
        {messages.length === 0 && (
          <div className={styles.emptyState}>
            <p>HR Bot готов к общению</p>
            {!isConnected && (
              <button className={styles.connectButton}>
                Подключиться к боту
              </button>
            )}
          </div>
        )}

        {messages.map((message, index) => (
          <div
            key={message.id + index}
            className={`${styles.message} ${
              message.sender === "user" ? styles.userMessage : styles.botMessage
            }`}
          >
            <div className={styles.messageContent}>
              <p>{message.text}</p>
              <span className={styles.timestamp}>
                {message.timestamp.toLocaleTimeString()}
                {message.type && (
                  <span className={styles.messageType}> ({message.type})</span>
                )}
              </span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Policy Dialog */}
      {showPolicyDialog && (
        <div className={styles.policyDialog}>
          <div className={styles.policyContent}>
            <h4>Политика конфиденциальности</h4>
            <p>
              Для продолжения работы необходимо принять политику обработки
              персональных данных.
            </p>
            <div className={styles.policyButtons}>
              <button onClick={acceptPolicy} className={styles.acceptButton}>
                Принять
              </button>
              <button
                onClick={() => setShowPolicyDialog(false)}
                className={styles.declineButton}
              >
                Отклонить
              </button>
            </div>
          </div>
        </div>
      )}

      <div className={styles.inputContainer}>
        {!isConnected && (
          <button
            onClick={connectWebSocket}
            disabled={isConnecting}
            className={styles.connectButton}
          >
            {isConnecting ? "Подключение..." : "Подключиться"}
          </button>
        )}

        {isConnected && (
          <>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={
                !isInitialized ? "Инициализация..." : "Введите ваш вопрос..."
              }
              disabled={!isInitialized}
              className={styles.messageInput}
            />
            <button
              onClick={sendMessage}
              disabled={!inputValue.trim() || !isInitialized}
              className={styles.sendButton}
            >
              Отправить
            </button>
          </>
        )}
      </div>

      {/* Status Info */}
      <div className={styles.statusInfo}>
        <small>
          {isConnected && <>Инициализация: {isInitialized ? "✅" : "⏳"}</>}
        </small>
      </div>
    </div>
  );
}
