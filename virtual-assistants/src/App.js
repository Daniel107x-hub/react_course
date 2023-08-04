import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div>
      <Hero />
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={AlexaImage}w
                description="Alexa was created by Amazon and helps you buy things"
              ></ProfileCard>
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                image={CortanaImage}
                description="Cortana was created by Microsoft What does it do?"
              ></ProfileCard>
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@siri01"
                image={SiriImage}
                description="Siri was created by Apple"
              ></ProfileCard>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section class="hero is-primary">
      <div class="hero-body">
        <p class="title">Personal digital assistants</p>
      </div>
    </section>
  );
}

export default App;
