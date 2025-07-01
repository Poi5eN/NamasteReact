const Contact = () => {
  return (
    <div className="contact bg-amber-200 p-4">
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out!</p>
      <form>
        <label htmlFor="name">Name:</label>
        <input className="border-black" type="text" id="name" name="name" required />
        
        <label htmlFor="email">Email:</label>
        <input className="border-black" type="email" id="email" name="email" required />
        
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;