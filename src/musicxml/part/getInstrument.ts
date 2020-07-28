export const getInstrument = (
  xmlDoc: XMLDocument,
  partNode: Node,
  nsResolver: XPathNSResolver
): string => {
  const instrument = xmlDoc.evaluate(
    "score-instrument/instrument-name",
    partNode,
    nsResolver,
    XPathResult.STRING_TYPE,
    null
  ).stringValue;

  if (!!instrument) {
    return instrument;
  }

  return "piano";
};
