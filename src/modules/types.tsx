import React from 'react';

export type Item = {
  key: string;
  text: string;
  done: boolean;
};

export type TodoInputProps = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  typing: boolean;
  setTyping: React.Dispatch<React.SetStateAction<boolean>>;
  onAdd: (text: string) => void; // eslint-disable-line no-unused-vars
};

export type TodoAddProps = {
  items: Array<Item>;
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
  itemsDone: Array<Item>;
  setItemsDone: React.Dispatch<React.SetStateAction<Item[]>>;
};

export type TodoItemProps = {
  item: Item;
  onCheck: (checkedItem: Item) => void; // eslint-disable-line no-unused-vars
};

export type TodoDonesProps = {
  itemsDone: Array<Item>;
};

export type CardProps = {
  children?: React.ReactNode;
};

export type ButtonProps = {
  children?: React.ReactNode;
  style?: string;
  icon?: string;
  alt?: string;
  onClick: () => void;
};

export type ListProps = {
  children?: React.ReactNode;
  style?: string;
};

export type ListItemProps = {
  status?: string;
  label?: string;
};
