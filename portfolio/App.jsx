import React from "react";

const App = () => {
  const name = "Rachel Barcellona";
  const role = "Student, junior developer";
  const bio =
    "Passionate about helping others and always ready to listen and learn!.";
  const skills = ["React", "JavaScript", "CSS", "Node.js", "Git"];
  const projects = [
    { name: "Personal Website", link: "www.rachelbarcellona.com" },
    { name: "GitHub", link: "https://github.com/Rachel1731" },
  ];
  const contact = {
    email: "rbarcellona@tampabay.rr.com",
    phone: "123-456-7890",
  };

  return (
    <div className="bg-gray-100 text-black-900">
      {/* Header */}
      <header className="bg-blue-600 text-white p-6 text-center">
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="text-lg">{role}</p>
      </header>

      {/* About Section */}
      <section id="about" className="p-6">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>{bio}</p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-white p-6">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="bg-blue-100 p-4 rounded shadow-md text-center"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      {/* Projects Section */}
      <section id="projects" className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ul>
          {projects.map((project, index) => (
            <li key={index} className="mb-2">
              <a href={project.link} className="text-blue-600 hover:underline">
                {project.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-blue-600 text-white p-6">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>If you'd like to get in touch, feel free to reach out!</p>
        <p>
          Email:{" "}
          <a href={`mailto:${contact.email}`} className="text-white underline">
            {contact.email}
          </a>
        </p>
        <p>Phone: {contact.phone}</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2025 {name}. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
