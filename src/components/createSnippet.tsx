import React from "react";
import { dialog } from "electron";

const CreateSnippet = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form: any = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  };

  return (
    <div>
      <form className="createSnippet" method="post" onSubmit={handleSubmit}>
        <div>Create Snippet</div>
        <textarea name="snippetContent" />
        <button type="submit">Add snippet</button>
      </form>
      <button
        onClick={() =>
          dialog.showOpenDialog({ properties: ["openFile", "multiSelections"] })
        }
      >
        Select Markdown File
      </button>
    </div>
  );
};

export default CreateSnippet;
