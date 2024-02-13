const RefleksiJSON = {
  "completedHtml": "Thank you for your feedback!",
  "title": "Form Refleksi",
  "description": "Terima kasih telah menyempatkan waktunya mengisi form ini, Data ini akan berguna bagi saya untuk meningkatkan proses pembelajaran lebih baik lagi.",
  "pages": [
   {
    "name": "page1",
    "elements": [
     {
      "type": "radiogroup",
      "name": "using_duration",
      "title": "How long have you been using the service?",
      "choices": [
       "Less than a month",
       "1-6 months",
       "7-12 months",
       "1-3 years",
       "Over 3 years"
      ]
     },
     {
      "type": "radiogroup",
      "name": "using_frequency",
      "title": "How often did you use the service?",
      "choices": [
       "Once a week",
       "2 or 3 times a month",
       "Once a month",
       "Less than once a month"
      ]
     },
     {
      "type": "radiogroup",
      "name": "cancel_reason",
      "title": "What was the main reason for cancelling the service?",
      "choices": [
       "No longer need it",
       "It didn't meet my needs",
       "Found a better alternative",
       "Found a cheaper alternative",
       "Quality was less than expected",
       "Ease of use was less than expected",
       "Access to the service was less than expected",
       "Customer service was less than expected"
      ],
      "showOtherItem": true
     },
     {
      "type": "matrix",
      "name": "future_using",
      "titleLocation": "hidden",
      "columns": [
       "Definitely",
       "Probably",
       "Not Sure",
       "Probably Not",
       "Definitely Not"
      ],
      "rows": [
       {
        "value": "use_in_future",
        "text": "Will you use our service in the future?"
       },
       {
        "value": "recommend",
        "text": "Will you recommend our service to others?"
       }
      ]
     },
     {
      "type": "comment",
      "name": "service_improvements",
      "title": "How can we improve our service?",
      "isRequired": true,
      "maxLength": 500
     },
     {
      "type": "comment",
      "name": "question1",
      "title": "Bagaimana Proses Pembbelajaran",
      "isRequired": true,
      "maxLength": 500
     }
    ]
   }
  ],
  "showQuestionNumbers": "off"
 }

export default RefleksiJSON;