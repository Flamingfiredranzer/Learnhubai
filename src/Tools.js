function Tools() {
  const tools = [
    { name: "ChatGPT", description: "AI chatbot for conversation and coding." },
    { name: "Midjourney", description: "AI image generation tool." },
    { name: "Claude", description: "Advanced AI assistant." },
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h1>Popular AI Tools</h1>

      {tools.map((tool, index) => (
        <div key={index} style={styles.card}>
          <h2>{tool.name}</h2>
          <p>{tool.description}</p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  card: {
    padding: "20px",
    margin: "20px 0",
    backgroundColor: "#f1f5f9",
    borderRadius: "8px"
  }
};

export default Tools;
