// app/contact/page.tsx
export default function Contact() {
    return (
      <div className="bg-white shadow-lg rounded-lg p-8 text-red-500">
        <h2 className="text-4xl font-bold text-primary text-center mb-6">
          Contact Me
        </h2>
        <p className="text-center text-lg mb-4">Feel free to reach out to me:</p>
        <ul className="text-center space-y-4 mb-8">
          <li>Email: <a href="mailto:muhammadbilalfareed94@gmail.com" className="text-primary hover:underline">muhammadbilalfareed94@gmail.com</a></li>
          <li>Phone: <span className="text-primary">0000-1111-2222</span></li>
        </ul>
        <form className="grid grid-cols-1 gap-4">
          <input type="text" placeholder="Your Name" className="p-3 border border-gray-300 rounded-md" />
          <input type="email" placeholder="Your Email" className="p-3 border border-gray-300 rounded-md" />
          <textarea placeholder="Your Message" rows={4} className="p-3 border border-gray-300 rounded-md"></textarea>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-primary transition">
            Send Message
          </button>
        </form>
      </div>
    );
  }
  