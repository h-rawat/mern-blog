export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://techcrunch.com/wp-content/uploads/2022/10/Acer-Chromebook-516-GE_rear-left-facing.jpeg"
          alt=""
        />
      </div>
      <div className="texts">
        <h2>Google adds AI-powered features to Chromebook</h2>
        <p className="info">
          <a className="author" href="">
            Name
          </a>
          <time>2023-01-06 16:45</time>
        </p>
        <p className="summary">
          Google announced new AI-powered features today for its Chromebook Plus
          line of devices, such as a writing assistant, a wallpaper creator and
          easy access to Google’s Gemini chatbot. As a reminder, Chromebook Plus
          laptops are productivity-focused devices with minimum spec
          requirements. The company also unveiled new Chromebook Plus models
          from HP, Acer and Asus.
        </p>
      </div>
    </div>
  );
}
