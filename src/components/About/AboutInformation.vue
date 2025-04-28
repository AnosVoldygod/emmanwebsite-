<template>
  <div class="about-wrapper">
    <div class="about-content">
      <div class="column-content">
        <div class="personal-photo">
          <img src="../../assets//Other/imageTemp.jpg" />
        </div>
        <div class="prof-links">
          <ul>
            <li>LinkedIn</li>
            <li>Git</li>
          </ul>
        </div>
      </div>
      <div class="information-content">
        <div class="position-title">
          <p>Current Title: Project Engineer</p>
        </div>
        <div class="prof-summary">
          <p>
            Hi, I’m an engineer with a background in mechanical design and project management, now
            diving deeper into the world of technology by completing a Master’s in Computer Science
            (Software Engineering). <br /><br />
            I’ve always loved puzzles, chess, and problem-solving, anything that challenges me to
            think strategically and stay sharp. That mindset naturally pulled me into engineering,
            and now into software development. <br />
            <br />
            I enjoy building full-stack solutions using JavaScript, Node.js, and Vue.js, and I have
            hands-on experience with cloud technologies like Firebase and Google Cloud. I’m
            passionate about learning new things, solving complex problems, and finding better, more
            efficient ways to approach challenges.

            <br /><br />When I’m not working on projects, I enjoy exploring new ideas, learning
            about emerging tech trends, and occasionally getting lost in a good strategy game. I
            believe clear communication and continuous growth are just as important as technical
            skills, and I’m always excited for what comes next.
          </p>
        </div>
        <div class="skills">
          <p>Skills</p>
          <ul>
            <li>VUE</li>
            <li>HTML, CSS, JavaScript</li>
            <li>Firebase (Auth, Firestore & Cloud functions)</li>
            <li>Java</li>
            <li>Kotlin</li>
            <li>Python</li>
            <li>VBA</li>
            <li>SQL</li>
          </ul>
        </div>
        <div class="other-interests">
          <p>Key Hobbies</p>
          <ul>
            <li>3D Printing</li>
            <li>Fostering (Ex racedogs)</li>
            <li>Greek Mythology</li>
            <li>Karate</li>
            <li>Reading/Audiobooks</li>
            <li>Boardgames</li>
            <li>Guitar</li>
            <li>Scuba Diving</li>
            <li>Learning New Skills</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 1rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

/* Main container */
.about-content {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
}

/* Left column (photo + links) */
.column-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  flex: 1 1 300px;
  min-width: 250px;
}

/* Right column (info) */
.information-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  flex: 2 1 600px;
  min-width: 300px;
}

/* Profile photo */
.personal-photo img {
  height: clamp(150px, 20vw, 250px);
  width: clamp(150px, 20vw, 250px);
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

/* Title section */
.position-title p {
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
}

/* Skills and hobbies */
.skills p,
.other-interests p {
  font-weight: bold;
  font-size: 1.2rem;
}

.skills ul,
.other-interests ul {
  list-style-type: disc;
  margin-left: 1.5rem;
}

.prof-summary p {
  line-height: 1.6;
}

/* Profile links */
.prof-links ul {
  list-style: none;
  padding: 0;
}

.prof-links li {
  margin-bottom: 0.5rem;
  color: #4fffa2;
  cursor: pointer;
  font-weight: 600;
  transition: color 0.3s;
}

.prof-links li:hover {
  color: #66f;
}
</style>
