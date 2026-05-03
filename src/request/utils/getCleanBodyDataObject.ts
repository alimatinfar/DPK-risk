
function getCleanBodyDataObject(obj: Record<string, any>): any {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (value !== null && value !== undefined && value !== "") {
      acc[key] = value;
    }
    return acc;
  }, {} as Record<string, any>);
}

export default getCleanBodyDataObject;