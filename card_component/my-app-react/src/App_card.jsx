import Card from './Card/Card'
import jupiImage from './assets/jupi.jpg'
import venusImage from './assets/venus.jpeg'
import uranusImage from './assets/urano.jpeg'

function App_card() {
  return (
    <section className="ejercicio ej-purple">
      <h2 className="h2 ej-purple h2">Card Component - solar system</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Card nombre="Jupiter" tipo="Gas giant" descripción="The largest planet. Its Great Red Spot has been an active storm for 350 years." imagen={jupiImage} />
        <Card nombre="Venus" tipo="Rocky planet" descripción="The second planet from the Sun. It is the hottest planet in our solar system." imagen={venusImage} />
        {/* <Card nombre="Saturn" tipo="Gas giant" descripción="The sixth planet from the Sun. Known for its prominent ring system." imagen={saturnImage} /> */}
        <Card nombre="Uranus" tipo="Ice giant" descripción="The seventh planet from the Sun. It rotates on its side, making it unique." imagen={uranusImage} />
      </div>
    </section>
  );
}

export default App_card
