export const getMeasureNumber = (
  xmlDoc: XMLDocument,
  measureNode: Node,
  nsResolver: XPathNSResolver
): number => {
  const measureNumber = xmlDoc.evaluate(
    "@number",
    measureNode,
    nsResolver,
    XPathResult.NUMBER_TYPE,
    null
  ).numberValue;

  return measureNumber;
};
