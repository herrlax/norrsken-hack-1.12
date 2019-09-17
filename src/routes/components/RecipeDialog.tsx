import React from "react";
import { Dinner } from "../../utils";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { Button } from "@material-ui/core";

type Props = {
  isOpen: boolean;
  hideDialog(): void;
  dinner?: Dinner;
};

const ingredientStyle = {
  marginBottom: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  listStyleType: "none",
  fontSize: "13px"
};

const listStyles = {
  padding: 0
};

const contentStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "500px",
  flexDirection: "column" as "column"
};

const RecipeDialog = ({ isOpen, hideDialog, dinner }: Props) => {
  if (!dinner) {
    return null;
  }

  return (
    <Dialog
      onClose={hideDialog}
      aria-labelledby="simple-dialog-title"
      open={isOpen}
    >
      <div style={contentStyles}>
        <DialogTitle id="simple-dialog-title">{dinner.name}</DialogTitle>
        <ul style={listStyles}>
          {dinner.ingredients.map(i => (
            <li key={i.id} style={ingredientStyle}>
              {i.name}
            </li>
          ))}
        </ul>
      </div>
      <Button onClick={hideDialog}>Close</Button>
    </Dialog>
  );
};

export default RecipeDialog;
