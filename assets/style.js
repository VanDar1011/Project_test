const obj_gas = [
  {
    name: "95-V",
    price: 22700,
  },
  {
    name: "95-III",
    price: 22140,
  },
  {
    name: "E5",
    price: 22190,
  },
  {
    name: "D0-V",
    price: 20500,
  },
];
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
// console.log(date);
const infomation = document.querySelector(".detail-infomaton-gas");
const timer_system = document.querySelector(".timer");
timer_system.innerHTML = `Ngày  ${date < 10 ? "0" + date : date}-${
  month < 10 ? "0" + month : month
}-${year < 10 ? "0" + year : year} ${hours < 10 ? "0" + hours : hours}:${
  minutes < 10 ? "0" + minutes : minutes
}:${seconds < 10 ? "0" + seconds : seconds}`;
// console.log(timer_system);
// console.log(infomation);
const content_header = document.querySelector(".content-header");
content_header.innerHTML = `Bảng giá xăng dầu`.toLocaleUpperCase();
infomation.innerHTML = obj_gas
  .map(({ name, price }) => {
    return `<div class="infomation-details information-details-gas-${name}"><div class="name-gas py-1 name-gas-${name} col-5 text-danger">${name}</div><div class="price-gas price-gas-${name} col-6">${price}</div></div><hr>`;
  })
  .join("");
const status_led = document.querySelector(".status-led");
const led_status = false;
status_led.innerHTML = led_status
  ? `Trạng thái :<span class=" status-led-on">ON</span>`
  : `Trạng thái : <span class=" status-led-off">OFF</span>`;
