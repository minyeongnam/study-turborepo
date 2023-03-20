import { createElement, ReactElement } from "react";
import Prompt from "@ui/components/questions/common/Prompt";
import QuestionTitle from "@ui/components/questions/common/QuestionTitle";
import RadioButton from "@ui/components/form/RadioButton";

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

function renderHottextNode(node: ChildNode, key: number) {
  if (node.nodeName !== "qti-hottext") return null;
  const identifier = (node as HTMLElement).getAttribute("identifier");
  return (
    <RadioButton
      key={key}
      name={`radio-hottext-group1`}
      id={`radio-hottext-${key}`}
      type="radio"
      value={identifier || ""}
    >
      <label htmlFor={`radio-hottext-${key}`}>{node.textContent}</label>
    </RadioButton>
  );
}

function renderElementNode(node: ChildNode, key: number) {
  if (node.nodeName === "#text" || node.nodeName === "qti-hottext") return null;

  const styleObject = converStyleToObject(
    (node as HTMLElement).getAttribute("style") || ""
  );
  const style = { whiteSpace: "pre-line", ...styleObject };

  const props = { key, style };
  const children = node.hasChildNodes() ? HotTextItems(node.childNodes) : null;

  return createElement(node.nodeName, props, children);
}

function HotTextItems(childNodes: NodeListOf<ChildNode>): ReactElement {
  const nodeList = Array.from(childNodes || []);
  return (
    <>
      {nodeList.map((val: ChildNode, key: number) => {
        return (
          renderTextNode(val) ||
          renderHottextNode(val, key) ||
          renderElementNode(val, key)
        );
      })}
    </>
  );
}

const HotText = ({ data }: Props) => {
  const getNodes = (str: string) => {
    return new DOMParser().parseFromString(str, "text/xml")?.childNodes;
  };
  const node = getNodes(`<div>${data.qtiHottextInteraction.contents}</div>`);

  return (
    <div className="hot-text">
      <QuestionTitle question="Question" />
      <Prompt qtiPrompt="Prompt" />
      <div className="hot-text__contents">
        {createElement("div", {}, HotTextItems(node))}
      </div>
    </div>
  );
};

export default HotText;
