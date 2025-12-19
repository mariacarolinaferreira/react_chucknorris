function About() {
  return (
    <div className="card">
      <h2>Sobre</h2>

      <p><b>Nome:</b> Maria Carol</p>

      <p>
        <b>LinkedIn:</b>{" "}
        <a
          href="https://www.linkedin.com/"
          target="_blank"
        >
          Meu LinkedIn
        </a>
      </p>

      <img
        src="https://avatars.githubusercontent.com/u/129337406?v=4"
        alt="Avatar do aluno"
      />
    </div>
  );
}

export default About;
