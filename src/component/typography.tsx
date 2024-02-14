import { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";
import lib from "../lib";

export enum TypographyType {
  DEFAULT,
  EMPHASIS,
  HINT,
  TITLE,
  SUBTITLE,
  ARTICLE,
}

interface TypographyInterface {
  children: ReactNode;
  type?: TypographyType;
  highlight?: boolean;
  invert?: boolean;
}

export default function Typography({
  children,
  type = TypographyType.DEFAULT,
  highlight = false,
  invert = false,
}: TypographyInterface) {
  const deco = [];

  if (type == TypographyType.DEFAULT) {
    deco.push(styles.default);
  } else if (type == TypographyType.EMPHASIS) {
    deco.push(styles.emphasis);
  } else if (type == TypographyType.HINT) {
    deco.push(styles.hint);
  } else if (type == TypographyType.TITLE) {
    deco.push(styles.title);
  } else if (type == TypographyType.ARTICLE) {
    deco.push(styles.article);
  }

  if (invert) {
    deco.push(styles.invert);
  }

  if (highlight) {
    deco.push(styles.highlight);
  }

  return <Text style={deco}>{children}</Text>;
}

const styles = StyleSheet.create({
  default: {
    fontSize: 11,
    fontWeight: "500",
  },
  article: {
    fontSize: 13,
    lineHeight: 13 * 1.5,
    letterSpacing: 0.1,
  },
  emphasis: {
    fontSize: 12,
    fontWeight: "600",
  },
  hint: {
    fontSize: 11,
    fontWeight: "300",
  },
  title: {
    fontSize: 16,
    fontWeight: "800",
  },

  invert: {
    color: lib.palette.WHITE,
  },
  highlight: {
    fontWeight: "600",
  },
});
