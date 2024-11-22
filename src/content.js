function Content(props) {
    return (<p style={{color: props.color}}>{props.text}</p>);
  }
  
  function App() {
    return (
      <>
        <Header />
        <Content color="blue" text="This is my first React Application!" />
        <Content color="red" text="Wish me luck..." />
        <Content color="green" text="I think I've got it!" />
        <Footer />
      </>
    );
  }