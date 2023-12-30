---
sidebar_position: 2
---

# Cable Payment


- `card_no`: Card Number `string`
- `phone_number`: Recipient phone number `string`
- `cable_type`: Cable type `string`
- `amount`: amount to buy `string`
- `Customer`: Customer name `string`

```python
import requests
import json
payload = {'card_no': '1212121212',
'amount': '500',
'phone_number': '08033104248',
'cable_type': 'dstv',
'Customer': 'Ayo'}
user_token = 'eacf1ab727d134b254361d834c28a2bf6ab0a111'
headers = {
      "Content-Type": "application/json",
      "Authorization": f'Token {user_token}'
} 
# jsonify the payload
data = json.dumps(payload)

```

### Send a post request with the payload

```python
url = "https://bigisub.ng/api/cable_purchase/"
res = requests.post(url, data=data, headers=headers)
```

### Response 

```bash
{
    "id": 31,
    "card_no": "1212121212",
    "cable_type": "dstv",
    "tran_id": "Cablein-L4sAceea",
    "api_id": "17036582265264227073290664",
    "phone_number": "08033104248",
    "amount": 500,
    "pay_amount": null,
    "current_bouquet": null,
    "Status": "successful",
    "Customer": "Ayo",
    "date_created": "2023-12-27T07:23:46.677039",
    "refund": false,
    "ident": "hd1EXfzD3effc0",
    "new_bouquett": null
}
```

View code in other programming languages [here](https://documenter.getpostman.com/view/18149105/2s93CRJqgM#b9b1e802-d90a-4c4e-a96f-61aae9dbcd99)