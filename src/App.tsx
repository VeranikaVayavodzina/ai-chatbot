import Chat from "./components/Chat";

function App() {
  return (
    <Chat 
      websocketUrl="ws://localhost:7999/ws"
      userData={{
        email: "test@example.com",
        role: "ARM", 
        position: "developer",
        department: "Python",
        uuid: "123e4567-e89b-12d3-a456-426614174000"
      }}
    />
  );
}

export default App;
