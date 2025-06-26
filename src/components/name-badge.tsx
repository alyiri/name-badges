// tsx tries its hardest to stay out of your way, this js code as a tsx file is enough to be tsx
type NameBadgeProps = {
  name: string,
  // / ? == adding an `| undefined`
  greeting? : string 
}

const NameBadge = (props: NameBadgeProps): JSX.Element => {
  return (
    <section className="badge">
      <header className="badge-header">
        <h1 className="text-5xl">{props.greeting}</h1>
        <p>My name is…</p>
      </header>
      <div className="badge-body">
        <p className="badge-name">{props.name}</p>
      </div>
      <footer className="badge-footer" />
    </section>
  );
};

export default NameBadge;
