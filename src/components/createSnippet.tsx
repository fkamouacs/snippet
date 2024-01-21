/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";

const CreateSnippet = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form: any = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  };

  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const files = Array.from(e.target.files);
    console.log(files[0].path);

    const fileExtension = getExtension(files[0].name);
    if (fileExtension === "md") {
      // fetch(files[0].path)
      //   .then((res) => res.text())
      //   .then((res) => console.log(res));
    }
  };

  const getExtension = (filename: string): string => {
    return filename.split(".").pop();
  };

  return (
    <div>
      <form className="createSnippet" method="post" onSubmit={handleSubmit}>
        <div>Create Snippet</div>
        <textarea name="snippetContent" />
        <button type="submit">Add snippet</button>
      </form>
      <input onChange={handleFileSelected} type="file" />
    </div>
  );
};

export default CreateSnippet;
