
interface ControlPanelProps {
  name: string;
  // onChange: () => void 
  // works until you dont use the event
  // JS is happy to accept extra elemts and throw the rest away
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const ControlPanel = ({ name, onChange}: ControlPanelProps) : JSX.Element => {
  return (
    <form
      className="flex flex-row gap-4 text-white bg-primary-10"
      onSubmit={(event) => event.preventDefault()}
    >
      <div>
        <label className="font-bold">Your Name</label>
        <input
          name="name"
          className="w-full"
          type="text"
          value={name}
          onChange={onChange}
        />
      </div>
    </form>
  );
};


export default ControlPanel;
