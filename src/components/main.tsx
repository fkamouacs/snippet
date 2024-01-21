import React, { FC, useState, useEffect } from "react";
import PouchDB from "pouchdb";
import CreateSnippet from "./createSnippet";

const Main = () => {
  const db = new PouchDB("snippets");

  const [snippet, setSnippet] = useState<snippet>();
  const [snippetIds, setSnippetIds] = useState<string[]>([]);
  const [createSnippet, setCreateSnippit] = useState(false);

  type snippet = {
    data: string;
    _id: string;
    _rev: string;
  };

  useEffect(() => {
    const ids: string[] = [];
    db.allDocs().then((res) => {
      res.rows.map((entry) => {
        ids.push(entry.id);
      });
      setSnippetIds(ids);
    });
  }, []);

  useEffect(() => {
    if (snippet !== undefined) {
      const current_snipp_index = snippetIds.indexOf(snippet._id);
      snippetIds.splice(current_snipp_index, 1);
      setSnippetIds(snippetIds);
      console.log(snippetIds);
    }
  }, [snippet]);

  const getRandomsnippet = async (): Promise<any> => {
    const rand = getRandomInt(snippetIds.length);

    const res = await db.get(snippetIds[rand]);
    return res;
  };

  const getRandomInt = (max: number): number => {
    return Math.floor(Math.random() * max);
  };

  const displaysnippet: FC = () => {
    if (snippet !== undefined) return <>{snippet.data}</>;
  };

  const handleNextsnippet = () => {
    if (snippetIds.length > 0) {
      getRandomsnippet().then((randSnip) => {
        setSnippet(randSnip);
      });
    }
  };

  return (
    <div className="main-container">
      {createSnippet ? (
        <CreateSnippet />
      ) : (
        <div className="main-snippet-container">
          <div className="main-snippet">{displaysnippet({})}</div>
          <button onClick={() => setCreateSnippit(true)}>Add snippet</button>
          <button onClick={() => handleNextsnippet()}>Next snippet</button>
        </div>
      )}
    </div>
  );
};

export default Main;
