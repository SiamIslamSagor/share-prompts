export const GET = async req => {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" },
    { id: 4, name: "Jack" },
  ];
  return new Response(JSON.stringify(users));
};
