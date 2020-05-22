import React from "react";

function Section({ children }: any) {
  return <div className="section">{children}</div>;
}

interface ButtonProp {
  text: string;
}

function Button({ text }: ButtonProp) {
  return <button>{text}</button>;
}

function Card({ children }: any) {
  return (
    <>
      <h1>Card Component</h1>
      <div className="card">
        <div className="card-header">
          <img src="/static/some-random-image.png" />
        </div>

        <div className="card-content">
          <p>This is the lower half of my card component</p>
          <Button text="Click me to refresh the page" />
        </div>
      </div>
    </>
  );
}

export default function MmainComponent() {
  return (
    <Section>
      <Card />
    </Section>
  );
}
