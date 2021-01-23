/*"How many days per week do you use the gym?": days,
    "I prefer a gym with PRODUCTS for black needs as opposed to a gym that offers generic products(skin, hair,beard)": agreeAnswers,
    "I prefer a gym with AMENETIES  designed for black needs (spa,services, haircare, workshops)": agreeAnswers,
    "A high quality gym that caters to black people": agreeAnswers,
    "I would travel further for a high quality gym that caters to black people`s needs": agreeAnswers,
    "I would prefer for this gym to be RUN by black people": agreeAnswers,
    "I would prefer for this gym to be OWNED by black people": agreeAnswers,
    "What would you expect the monthly membership at a luxury fitness club for the black community be?": money,*/
var quizQuestions = [
  {
      question: "How many days per week do you use the gym?",
      answers: [
          {
              type: "1:Q1",
              content: "1"
          },
          {
              type: "2:Q1",
              content: "2"
          },
          {
            type: "3:Q1",
            content: "3"
        },
        {
            type: "4:Q1",
            content: "4"
        },
        
        {
            type: "5:Q1",
            content: "5"
        },
          {
              type: "6:Q1",
              content: "6"
          },
          {
            type: "7:Q1",
            content: "7"
        },
      ]
  },
  {
      question: "I prefer a gym with PRODUCTS for black needs as opposed to a gym that offers generic products(skin, hair,beard)",
      answers: [
        {
            type: "Strongly Disagree:Q2",
            content: "Strongly Disagree"
        },
        {
            type: "Disagree:Q2",
            content: "Disagree"
        },
        {
            type: "Neutral:Q2",
            content: "Neutral"
        },
        {
          type: "Agree:Q2",
          content: "Agree"
      },
      {
          type: "Strongly Agree:Q2",
          content: "Strongly Agree"
      }
    ]
},
  {
      question: "I prefer a gym with AMENETIES  designed for black needs (spa,services, haircare, workshops)",
      answers: [
          {
              type: "Strongly Disagree:Q3",
              content: "Strongly Disagree"
          },
          {
              type: "Disagree:Q3",
              content: "Disagree"
          },
          {
              type: "Neutral:Q3",
              content: "Neutral"
          },
          {
            type: "Agree:Q3",
            content: "Agree"
        },
        {
            type: "Strongly Agree:Q3",
            content: "Strongly Agree"
        }
      ]
  },
  {
      question: "A high quality gym that caters to black people's needs is worth paying more for",
      answers: [
        {
            type: "Strongly Disagree:Q3",
            content: "Strongly Disagree"
        },
        {
            type: "Disagree:Q3",
            content: "Disagree"
        },
        {
            type: "Neutral:Q3",
            content: "Neutral"
        },
        {
          type: "Agree:Q3",
          content: "Agree"
      },
      {
          type: "Strongly Agree:Q3",
          content: "Strongly Agree"
      }
    ]
},
  {
      question: "I would travel further for a high quality gym that caters to black people's needs",
      answers: [
         
        {
            type: "Strongly Disagree:Q4",
            content: "Strongly Disagree"
        },
        {
            type: "Disagree:Q4",
            content: "Disagree"
        },
        {
            type: "Neutral:Q4",
            content: "Neutral"
        },
        {
          type: "Agree:Q4",
          content: "Agree"
      },
      {
          type: "Strongly Agree:Q4",
          content: "Strongly Agree"
      }
    ]
},
  {
      question:"I would prefer for this gym to be RUN by black people",
      answers: [
        {
            type: "Strongly Disagree:Q5",
            content: "Strongly Disagree"
        },
        {
            type: "Disagree:Q5",
            content: "Disagree"
        },
        {
            type: "Neutral:Q5",
            content: "Neutral"
        },
        {
          type: "Agree:Q5",
          content: "Agree"
      },
      {
          type: "Strongly Agree:Q5",
          content: "Strongly Agree"
      }
    ]
},
  {
    question:"I would prefer for this gym to be OWNED by black people",
    answers: [
        {
            type: "Strongly Disagree:Q6",
            content: "Strongly Disagree"
        },
        {
            type: "Disagree:Q6",
            content: "Disagree"
        },
        {
            type: "Neutral:Q6",
            content: "Neutral"
        },
        {
          type: "Agree:Q6",
          content: "Agree"
      },
      {
          type: "Strongly Agree:Q6",
          content: "Strongly Agree"
      }
    ]
},
{
    question:"What would you expect the monthly membership at a luxury fitness club for the black community be?",
    answers: [
        {
            type: "$50-$99:Q7",
            content: "$50-$99"
        },
        {
            type: "$100-$174:Q7",
            content: "$100-$174"
        },
        {
            type: "$175-$224:Q7",
            content: "$175-$224"
        },
        {
            type: "$225-$274:Q7",
            content: "$225-$274"
        },
        {
            type: "$275 or above:Q7",
            content: "$275 or above"
        }
    ]

}
];

export default quizQuestions;
