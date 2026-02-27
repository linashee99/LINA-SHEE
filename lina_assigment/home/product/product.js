// ១. បង្កើត Variable ដើម្បីទុកចំនួនលេខ (ចាប់ផ្តើមពីលេខ 1)
let count = 1;

// ២. បង្កើតមុខងារ (Function) សម្រាប់ផ្លាស់ប្តូរលេខ
function changeQty(amount) {
    // យកតម្លៃចាស់ បូកជាមួយតម្លៃដែលបញ្ជូនមក (1 ឬ -1)
    count = count + amount;

    // ឆែកលក្ខខណ្ឌ៖ មិនឱ្យលេខតូចជាង 1 ឡើយ
    if (count < 1) {
        count = 1;
    }

    // ៣. បង្ហាញលេខថ្មីទៅលើអេក្រង់
    document.getElementById('qty-number').innerText = count;
}