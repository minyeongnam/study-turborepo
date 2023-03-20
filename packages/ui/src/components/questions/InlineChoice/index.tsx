import { createElement, ReactElement } from "react";
import Prompt from "@ui/components/questions/common/Prompt";
import QuestionTitle from "@ui/components/questions/common/QuestionTitle";

interface Props {
  data: any;
}

function converStyleToObject(styleString: string): any {
  return styleString.split(";").reduce((style: any, rule: string) => {
    const [property, value] = rule.split(":");
    if (property && value) {
      style[(property as string).trim()] = value.trim();
    }
    return style;
  }, {});
}

function renderTextNode(node: ChildNode) {
  if (node.nodeName !== "#text") return null;
  return node.textContent;
}

function renderInlineChoiceNode(node: ChildNode, key: number) {
  if (
    node.nodeName !== "qti-inline-choice-interaction" &&
    node.nodeName !== "qti-inline-choice"
  )
    return null;
  const child = Array.from(node.childNodes || []).map((val, index) => {
    const identifier = (val as HTMLElement).getAttribute("identifier") || "";
    return createElement(
      "option",
      { value: identifier, key: index },
      val.textContent
    );
  });
  return createElement("select", { key: key, onChange: (e) => null }, child);
}

function renderElementNode(node: ChildNode, key: number) {
  if (
    node.nodeName === "#text" ||
    node.nodeName === "qti-inline-choice" ||
    node.nodeName === "qti-inline-choice-interaction"
  )
    return null;

  const styleObject = converStyleToObject(
    (node as HTMLElement).getAttribute("style") || ""
  );
  const style = { whiteSpace: "pre-line", ...styleObject };

  const props = { key, style };
  const children = node.hasChildNodes()
    ? InlineChoiceItems(node.childNodes)
    : null;

  return createElement(node.nodeName, props, children);
}

function InlineChoiceItems(childNodes: NodeListOf<ChildNode>): ReactElement {
  const nodeList = Array.from(childNodes || []);
  return (
    <>
      {nodeList.map((val: ChildNode, key: number) => {
        return (
          renderTextNode(val) ||
          renderInlineChoiceNode(val, key) ||
          renderElementNode(val, key)
        );
      })}
    </>
  );
}

const InlineChoice = ({ data }: Props) => {
  const getNodes = (str: string) => {
    return new DOMParser().parseFromString(str, "text/xml")?.childNodes;
  };
  const node = getNodes(`<div>${data.qtiItemBody.contents}</div>`);
  return (
    <div className="inline-choice">
      <QuestionTitle question={data.qtiItemBody.question} />
      <Prompt qtiPrompt="Prompt" />
      <div className="inline-choice__contents">
        {createElement("div", {}, InlineChoiceItems(node))}
      </div>
    </div>
  );
};

export default InlineChoice;
