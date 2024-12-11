export const bio = [
  [
    {
      name: "Bio",
    },
    {
      name: "gender",
      type: "select",
      options: ["Gender", "Male", "Female"],
    },
    { name: "birthDate", type: "text", placeholder: "Birthdate DD.MM.YYYY" },
    {
      name: "height",
      type: "text",
      placeholder: "Height",
    },
    {
      name: "weight",
      type: "text",
      placeholder: "Weight",
    },
    {
      name: "eyeColor",
      type: "text",
      placeholder: "Eye color",
    },
    {
      name: "hairColor",
      type: "text",
      placeholder: "Hair color",
    },
    {
      name: "hairType",
      type: "text",
      placeholder: "Hair type",
    },
    {
      name: "bloodGroup",
      type: "select",
      options: [
        "Blood group",
        "A RhD positive (A+)",
        "A RhD positive (A-)",
        "B RhD positive (B+)",
        "B RhD positive (B-)",
        "O RhD negative (O+)",
        "O RhD negative (O-)",
        "AB RhD negative (AB+)",
        "AB RhD negative (AB-)",
      ],
    },
  ],
  [
    {
      name: "Company",
    },
    {
      name: "image",
      type: "text",
      placeholder: "Image link",
    },
    {
      name: "companyName",
      type: "text",
      placeholder: "Company name",
    },
    {
      name: "department",
      type: "text",
      placeholder: "Department",
    },
    {
      name: "title",
      type: "text",
      placeholder: "Position",
    },
    {
      name: "compAddress",
      type: "text",
      placeholder: "Address (company)",
    },
    {
      name: "compZip",
      type: "text",
      placeholder: "Postal code (company)",
    },
    {
      name: "compCity",
      label: "City",
      type: "text",
      placeholder: "City (company)",
    },
    {
      name: "compCountry",
      label: "Country",
      type: "text",
      placeholder: "Country (company)",
    },
  ],
  [
    {
      name: "Bank",
    },
    {
      name: "iban",
      type: "text",
      placeholder: "IBAN",
    },
    {
      name: "type",
      type: "select",
      options: ["Card type", "visa", "mastercard", "amex", "discover"],
    },
    {
      name: "number",
      type: "text",
      placeholder: "Card number",
    },
    {
      name: "cardExpire",
      label: "Card expiration date",
      type: "text",
      placeholder: "MM/YY or MM/YYYY",
    },
  ],
];
