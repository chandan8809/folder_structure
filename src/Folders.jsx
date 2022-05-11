import React, { useState } from "react";

const Folders = ({ fileData }) => {
  const [open, setOpen] = useState(false);

  if (fileData.isFolder) {
    return (
      <div>
        <div onClick={() => setOpen(!open)}>
          {fileData.name}
          
        </div>

        <div style={{ display: open ? "block" : "none", marginLeft: "15px"}}>
          {fileData.inside.map((each) => {
            return <Folders fileData={each} key={each.name}/>;
          })}
        </div>
      </div>
    );
  }
  else{
      return <div>{fileData.name}</div>
  }
};

export default Folders;
