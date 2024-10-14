const items = document.querySelectorAll("#categories .item");

const categoryCount = items.length;
console.log(`Number of categories: ${categoryCount}`);

items.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const listItemCount = item.querySelectorAll("ul li").length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${listItemCount}`);
});
