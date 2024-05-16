// 2. ჯავასკრიპტით შევქმნათ img tag რომელსაც src ად მივანიჭებთ ამ: https://www.simplilearn.com/ice9/free_resources_article_thumb/Become_a_Front_End_Developer.jpg სურათის ლინკს და ეს შექმნილი img ჩავსვათ body ში (ისე როგორც ლექციაზე გავაკეთეთ). გამოიყენეთ ეს მეთოდი setAttribute() https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute


const image = document.createElement("img");
image.setAttribute(
  "src",
  "https://www.simplilearn.com/ice9/free_resources_article_thumb/Become_a_Front_End_Developer.jpg"
);
image.setAttribute("studying", "codding");
image.style.width = "300px";
document.body.appendChild(image);

// 3. დაამატეთ ერთი ინფუთი და ღილაკი , რა ინფორმაციასაც  შეიყვანთ ინფუთის ველში, ღილაკზე დაჭერისას ქვემოთ p ტეგში  გამოიტანეთ ინფუთის მნიშვნელობა. გამოიყენეთ ეს მეთოდი https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event





// 4.დავწეროთ ფუნქცია, რომელიც დაგვიბრუნებს არგუმენტად მიღებული ხარჯების ჯამს. ფუნქციას არგუმენტად გადაეცით  მასივი - productData და დათვალეთ გადაცემული მასივში amount ის ჯამი const productData = [{product_id: 1, amount: 200}, { product_id: 2, amount: 300 }, { product_id:3, amount: 500 }] დაბრუნებული ჯამის მნიშნელობა გამოიტანეთ p ტეგის მნიშნელობაში





// 5. რთული დამატებითი დავალება html შექმენით <div id="user-list"></div> გამოიყენეთ 4 ელემენტიანი გრიდ სისტემა.



