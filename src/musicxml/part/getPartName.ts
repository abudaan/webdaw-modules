export const getPartName = (
  xmlDoc: XMLDocument,
  partNode: Node,
  nsResolver: XPathNSResolver
): [string, string] => {
  // get id and name of the part
  const partId = xmlDoc.evaluate("@id", partNode, nsResolver, XPathResult.STRING_TYPE, null)
    .stringValue;
  const partName = xmlDoc.evaluate("part-name", partNode, nsResolver, XPathResult.STRING_TYPE, null)
    .stringValue;

  return [partId, partName];
};
