import question1Graphic from '../assets/questionGraphics/glassQuestion1.svg';
import question2Graphic from '../assets/questionGraphics/personQuestion2.svg';
import question3Graphic from '../assets/questionGraphics/carQuestion3.svg';
import question4Graphic from '../assets/questionGraphics/chairQuestion4.svg';
import question5Graphic from '../assets/questionGraphics/temperatureQuestion5.svg';
import question6Graphic from '../assets/questionGraphics/moneyQuestion6.svg';
import question7Graphic from '../assets/questionGraphics/smileyQuestion7.svg';
import question8Graphic from '../assets/questionGraphics/angryQuestion8.svg';
import question9Graphic from '../assets/questionGraphics/carsQuestion9.svg';
import question10Graphic from '../assets/questionGraphics/shoppingQuestion10.svg';
import question11Graphic from '../assets/questionGraphics/calendarQuestion11.svg';
import question12Graphic from '../assets/questionGraphics/trophyQuestion12.svg';
import question13Graphic from '../assets/questionGraphics/sadQuestion13.svg';
import question14Graphic from '../assets/questionGraphics/trophyQuestion14.svg';
import question15Graphic from '../assets/questionGraphics/signQuestion15.svg';
import question16Graphic from '../assets/questionGraphics/luxuryQuestion16.svg';
import question17Graphic from '../assets/questionGraphics/watchingQuestion17.svg';
import question18Graphic from '../assets/questionGraphics/personQuestion18.svg';
import question19Graphic from '../assets/questionGraphics/menuQuestion19.svg';

export const API_URL = 'http://localhost:5000/fetch-data';

export const QuestionData = {
  id: 'ASSESSMENT-UUIDv4-GOES-HERE',
  name: 'Prospecting',
  template_id: '1cda1f71-e8de-4678-9d37-2ae4e6bf4bed',
  theme: 'syntoniq-prospecting',
  relations: {
    organization_id: 'ORG-UUIDv4-GOES-HERE --> Can be blank for now',
    suborganization_id: 'SUBORG-UUIDv4-GOES-HERE --> Can be blank for now',
    advisor_id: 'ADVISOR-UUIDv4-GOES-HERE --> Can be blank for now',
    client_id: 'CLIENT-UUIDv4-GOES-HERE --> Can be blank for now',
  },
  client: {
    first_name: '',
    last_name: '',
  },
  sections: ['I Think', 'I Feel', 'I Focus', 'I Lean'],
  questions: [
    [
      {
        preface: 'Alrighty then, let’s get started…what do you see here?',
        body: 'Is the glass half empty or half full?',
        context: {
          above: '',
          center: '',
          below: {
            body: '',
            icon: '',
          },
        },
        elements: [
          {
            question_type: 'small-multicard',
            question_override: {
              preface: '',
              body: '',
            },
            context: {
              help_text: '',
              left: {
                icon: {
                  above: '',
                  center: '',
                  below: '',
                },
                text: {
                  above: '',
                  center: '',
                  below: '',
                },
                subtext: {
                  above: '',
                  center: '',
                  below: '',
                },
                value: '',
              },
              right: {
                icon: {
                  above: '',
                  center: '',
                  below: '',
                },
                text: {
                  above: '',
                  center: '',
                  below: '',
                },
                subtext: {
                  above: '',
                  center: '',
                  below: '',
                },
                value: '',
              },
              slider: {
                default: '',
                min: '',
                max: '',
                step: '',
                ticks: false,
              },
              input: {
                body: '',
                placeholder: '',
                values: [],
              },
              radio: [],
              multicard: [
                ['Half Empty', '0.4'],
                ['Half Full', '0.4'],
                ['I Just See Water!', '0.2'],
              ],
              dragdrop: [],
            },
          },
        ],
        icon: question1Graphic,
        dimensions: ['163px', '272px'],
      },
      {
        preface:
          'Think of individuals like you, people you instinctively compare yourself to. What is the likelihood that each\n of the following events will happen to you personally as compared to them?',
        body: 'Being publicly recognized for a professional or personal achievement',
        context: {
          above: '',
          center: '',
          below: {
            body: '',
            icon: '',
          },
        },
        elements: [
          {
            question_type: 'slider',
            question_override: {
              preface: '',
              body: '',
            },
            context: {
              help_text: '',
              left: {
                icon: {
                  above: 'you_person',
                  center: '',
                  below: '',
                },
                text: {
                  above: '',
                  center: '',
                  below: '',
                },
                subtext: {
                  above: '',
                  center: '',
                  below: '',
                },
                value: '0',
              },
              right: {
                icon: {
                  above: 'others_person',
                  center: '',
                  below: '',
                },
                text: {
                  above: '',
                  center: '',
                  below: '',
                },
                subtext: {
                  above: '',
                  center: '',
                  below: '',
                },
                value: '100',
              },
              slider: {
                default: '50',
                min: '0',
                max: '100',
                step: '1',
                ticks: false,
              },
              input: {
                body: '',
                placeholder: '',
                values: [],
              },

              radio: [],
              multicard: [],
              dragdrop: [],
            },
          },
        ],
        icon: question2Graphic,
        dimensions: ['140.34px', '296.32px'],
      },
      {
        preface:
          'Think of individuals like you, people you instinctively compare yourself to. What is the likelihood that each\n of the following events will happen to you personally as compared to them?',
        body: 'Win a free vacation for you and four of your close friends or family',
        context: {
          above: '',
          center: '',
          below: {
            body: '',
            icon: '',
          },
        },
        elements: [
          {
            question_type: 'slider',
            question_override: {
              preface: '',
              body: '',
            },
            context: {
              help_text: '',
              left: {
                icon: {
                  above: 'you_car',
                  center: '',
                  below: '',
                },
                text: {
                  above: '',
                  center: '',
                  below: '',
                },
                subtext: {
                  above: '',
                  center: '',
                  below: '',
                },
                value: '0',
              },
              right: {
                icon: {
                  above: 'other_car',
                  center: '',
                  below: '',
                },
                text: {
                  above: '',
                  center: '',
                  below: '',
                },
                subtext: {
                  above: '',
                  center: '',
                  below: '',
                },
                value: '100',
              },
              slider: {
                default: '50',
                min: '0',
                max: '100',
                step: '1',
                ticks: false,
              },
              input: {
                body: '',
                placeholder: '',
                values: [],
              },

              radio: [],
              multicard: [],
              dragdrop: [],
            },
          },
        ],
        icon: question3Graphic,
        dimensions: ['353.33px', '180px'],
      },
      {
        preface:
          'Think of individuals like you, people you instinctively compare yourself to.\nWhat is the likelihood that each of the following events will happen to you personally as compared to them?',
        body: 'Achieve a comfortable lifestyle in retirement.',
        context: {
          above: '',
          center: '',
          below: {
            body: '',
            icon: '',
          },
        },
        elements: [
          {
            question_type: 'slider',
            question_override: {
              preface: '',
              body: '',
            },
            context: {
              help_text: '',
              left: {
                icon: {
                  above: 'you_beach_chair',
                  center: '',
                  below: '',
                },
                text: {
                  above: '',
                  center: '',
                  below: '',
                },
                subtext: {
                  above: '',
                  center: '',
                  below: '',
                },
                value: '0',
              },
              right: {
                icon: {
                  above: 'others_beach_chair',
                  center: '',
                  below: '',
                },
                text: {
                  above: '',
                  center: '',
                  below: '',
                },
                subtext: {
                  above: '',
                  center: '',
                  below: '',
                },
                value: '100',
              },
              slider: {
                default: '',
                min: '',
                max: '',
                step: '',
                ticks: false,
              },
              input: {
                body: '',
                placeholder: '',
                values: [],
              },
              radio: [],
              multicard: [],
              dragdrop: [],
            },
          },
        ],
        icon: question4Graphic,
        dimensions: ['260px', '260px'],
      },
      {
        preface:
          'Think of individuals like you, people you instinctively compare yourself to.\nWhat is the likelihood that each of the following events will happen to you personally as compared to them?',
        body: 'Getting the Flu or bad cold within the\n next 12 months ',
        context: {
          above: '',
          center: '',
          below: {
            body: '',
            icon: '',
          },
        },
        elements: [
          {
            question_type: 'slider',
            question_override: {
              preface: '',
              body: '',
            },
            context: {
              help_text: '',
              left: {
                icon: {
                  above: 'you_thermometer',
                  center: '',
                  below: '',
                },
                text: {
                  above: '',
                  center: '',
                  below: '',
                },
                subtext: {
                  above: '',
                  center: '',
                  below: '',
                },
                value: '0',
              },
              right: {
                icon: {
                  above: 'others_thermometer',
                  center: '',
                  below: '',
                },
                text: {
                  above: '',
                  center: '',
                  below: '',
                },
                subtext: {
                  above: '',
                  center: '',
                  below: '',
                },
                value: '100',
              },
              slider: {
                default: '50',
                min: '0',
                max: '100',
                step: '1',
                ticks: false,
              },
              input: {
                body: '',
                placeholder: '',
                values: [],
              },
              radio: [],
              multicard: [],
              dragdrop: [],
            },
          },
        ],
        icon: question5Graphic,
        dimensions: ['205px', '205px'],
      },
      {
        preface:
          'Think of individuals like you, people you instinctively compare yourself to.\nWhat is the likelihood that each of the following events will happen to you personally as compared to them?',
        body: 'Losing more money than your peers in the market\n in the next 3 years',
        context: {
          above: '',
          center: '',
          below: {
            body: '',
            icon: '',
          },
        },
        elements: [
          {
            question_type: 'slider',
            question_override: {
              preface: '',
              body: '',
            },
            context: {
              help_text: '',
              left: {
                icon: {
                  above: 'you_money_bag_decline',
                  center: '',
                  below: '',
                },
                text: {
                  above: '',
                  center: '',
                  below: '',
                },
                subtext: {
                  above: '',
                  center: '',
                  below: '',
                },
                value: '0',
              },
              right: {
                icon: {
                  above: 'others_money_bag_decline',
                  center: '',
                  below: '',
                },
                text: {
                  above: '',
                  center: '',
                  below: '',
                },
                subtext: {
                  above: '',
                  center: '',
                  below: '',
                },
                value: '100',
              },
              slider: {
                default: '50',
                min: '0',
                max: '100',
                step: '1',
                ticks: false,
              },
              input: {
                body: '',
                placeholder: '',
                values: [],
              },
              radio: [],
              multicard: [],
              dragdrop: [],
            },
          },
        ],
        icon: question6Graphic,
        dimensions: ['189px', '258px'],
      },
    ],
    [
      {
        preface:
          'Imagine you are taking a train to work that runs once every 30 mins. Unfortunately, you\n miss the train today by 5 minutes…',
        body: 'How much would you regret leaving your home\n late by 5 mins?',
        context: {
          above: '',
          center: '',
          below: {
            body: '',
            icon: 'smiling_emoji',
          },
        },
        elements: [
          {
            question_type: 'slider-with-transition',
            question_override: {
              preface: '',
              body: '',
            },
            context: {
              help_text: '',
              left: {
                icon: {
                  above: '',
                  center: '',
                  below: '',
                },
                text: {
                  above: '',
                  center: '',
                  below: 'Well, thats Life!',
                },
                subtext: {
                  above: '',
                  center: '',
                  below: '',
                },
                value: '0',
              },
              right: {
                icon: {
                  above: '',
                  center: '',
                  below: '',
                },
                text: {
                  above: '',
                  center: '',
                  below: 'Ahh I hate It!',
                },
                subtext: {
                  above: '',
                  center: '',
                  below: '',
                },
                value: '100',
              },
              slider: {
                default: '0',
                min: '0',
                max: '100',
                step: '1',
                ticks: false,
              },
              input: {
                body: '',
                placeholder: '',
                values: [],
              },
              radio: [],
              multicard: [],
              dragdrop: [],
            },
          },
        ],
        icon1: question7Graphic,
        icon2: question8Graphic,
        dimensions: ['231px', '154px'],
      },
      {
        preface:
          'Don’t hate us…you missed it, but it’s just by a whisker. You can still see it \nleaving the station.',
        body: 'How much would you regret missing it by just\n a few seconds?',
        context: {
          above: '',
          center: '',
          below: {
            body: '',
            icon: 'angry_frown_emoji',
          },
        },
        elements: [
          {
            question_type: 'slider-with-transition',
            question_override: {
              preface: '',
              body: '',
            },
            context: {
              help_text: '',
              left: {
                icon: {
                  above: '',
                  center: '',
                  below: '',
                },
                text: {
                  above: '',
                  center: '',
                  below: 'Well, Thats Life!',
                },
                subtext: {
                  above: '',
                  center: '',
                  below: '',
                },
                value: '0',
              },
              right: {
                icon: {
                  above: '',
                  center: '',
                  below: '',
                },
                text: {
                  above: '',
                  center: '',
                  below: 'Ahh I hate it!',
                },
                subtext: {
                  above: '',
                  center: '',
                  below: '',
                },
                value: '100',
              },
              slider: {
                default: '100',
                min: '0',
                max: '100',
                step: '1',
                ticks: false,
              },
              input: {
                body: '',
                placeholder: '',
                values: [],
              },
              radio: [],
              multicard: [],
              dragdrop: [],
            },
          },
        ],
        icon1: question7Graphic,
        icon2: question8Graphic,

        dimensions: ['231px', '154px'],
      },
      {
        preface:
          'Imagine you are driving to an important meeting and the traffic seems a little worse today. Worse still, you\n accidentally forgot your phone and you feel you may be late by at least 15 mins if you run back home to get it.\n You remember an alternative route you have taken a few times before that seemed like it was faster.  ',
        body: 'What would you do?',
        context: {
          above: '',
          center: '',
          below: {
            body: '',
            icon: 'two_cars_at_stoplight',
          },
        },
        elements: [
          {
            question_type: 'card',
            question_override: {
              preface: '',
              body: '',
            },
            context: {
              help_text: '',
              left: {
                icon: {
                  above: '',
                  center: '',
                  below: '',
                },
                text: {
                  above: '',
                  center: 'Stick to the current route',
                  below: '',
                },
                subtext: {
                  above: '',
                  center: '',
                  below: '',
                },
                value: '0.1',
              },
              right: {
                icon: {
                  above: '',
                  center: '',
                  below: '',
                },
                text: {
                  above: '',
                  center: 'Take the alternate one',
                  below: '',
                },
                subtext: {
                  above: '',
                  center: '',
                  below: '',
                },
                value: '0.2',
              },
              slider: {
                default: '',
                min: '',
                max: '',
                step: '',
                ticks: false,
              },
              input: {
                body: '',
                placeholder: '',
                values: [],
              },
              radio: [],
              multicard: [],
              dragdrop: [],
            },
          },
        ],
        icon: question9Graphic,
        dimensions: ['426px', '169px'],
      },
      {
        preface:
          'You just made a large purchase that you have always wanted to buy.\n A week after buying it, the price of it is now slashed by third.',
        body: 'How would you feel about it?',
        context: {
          above: '',
          center: '',
          below: {
            body: '',
            icon: 'shopping_bag_with_coins',
          },
        },
        elements: [
          {
            question_type: 'card',
            question_override: {
              preface: '',
              body: '',
            },
            context: {
              help_text: '',
              left: {
                icon: {
                  above: '',
                  center: '',
                  below: '',
                },
                text: {
                  above: '',
                  center: 'Ahh I hate it! :rage:',
                  below: '',
                },
                subtext: {
                  above: '',
                  center: '',
                  below: '',
                },
                value: '0.1',
              },
              right: {
                icon: {
                  above: '',
                  center: '',
                  below: '',
                },
                text: {
                  above: '',
                  center: 'Well, Thats Life! :smiling_face:',
                  below: '',
                },
                subtext: {
                  above: '',
                  center: '',
                  below: '',
                },
                value: '0.2',
              },
              slider: {
                default: '',
                min: '',
                max: '',
                step: '',
                ticks: false,
              },
              input: {
                body: '',
                placeholder: '',
                values: [],
              },
              radio: [],
              multicard: [],
              dragdrop: [],
            },
          },
        ],
        icon: question10Graphic,
        dimensions: ['196px', '193px'],
      },
      {
        preface:
          'I wouldn’t have cared much had the price been slashed after… ',
        body: 'Pick when in the future it wouldn’t have bothered you',
        context: {
          above: '',
          center: '',
          below: {
            body: '',
            icon: 'date_picker',
          },
        },
        elements: [
          {
            question_type: 'date-picker',
            question_override: {
              preface: '',
              body: '',
            },
            context: {
              help_text: '',
              left: {
                icon: {
                  above: '',
                  center: '',
                  below: '',
                },
                text: {
                  above: '',
                  center: 'Ahh I hate it! :rage:',
                  below: '',
                },
                subtext: {
                  above: '',
                  center: '',
                  below: '',
                },
                value: '0.1',
              },
              right: {
                icon: {
                  above: '',
                  center: '',
                  below: '',
                },
                text: {
                  above: '',
                  center: 'Well, Thats Life! :smiling_face:',
                  below: '',
                },
                subtext: {
                  above: '',
                  center: '',
                  below: '',
                },
                value: '0.2',
              },
              slider: {
                default: '',
                min: '',
                max: '',
                step: '',
                ticks: false,
              },
              input: {
                body: '',
                placeholder: '',
                values: [],
              },
              radio: [],
              multicard: [],
              dragdrop: [],
            },
          },
        ],
        icon: question11Graphic,
        dimensions: ['316px', '238px'],
      },
    ],
    [
      {
        preface: '',
        body: 'In life, I often find myself focusing on',
        context: {
          above: '',
          center: '',
          below: {
            body: '',
            icon: 'gold_chalice_with_target',
          },
        },
        elements: [
          {
            question_type: 'card',
            question_override: {
              preface: '',
              body: '',
            },
            context: {
              help_text: '',
              left: {
                icon: {
                  above: '',
                  center: '',
                  below: '',
                },
                text: {
                  above: '',
                  center: 'Losses',
                  below: '',
                },
                subtext: {
                  above: '',
                  center: '',
                  below: '',
                },
                value: '0.1',
              },
              right: {
                icon: {
                  above: '',
                  center: '',
                  below: '',
                },
                text: {
                  above: '',
                  center: 'Gain',
                  below: '',
                },
                subtext: {
                  above: '',
                  center: '',
                  below: '',
                },
                value: '0.2',
              },
              slider: {
                default: '',
                min: '',
                max: '',
                step: '',
                ticks: false,
              },
              input: {
                body: '',
                placeholder: '',
                values: [],
              },
              radio: [],
              multicard: [],
              dragdrop: [],
            },
          },
        ],
        icon: question12Graphic,
        dimensions: ['273px', '206px'],
      },
      {
        preface: '',
        body: 'When it comes to regret, I tend to find\n myself regretting things that:',
        context: {
          above: '',
          center: '',
          below: {
            body: '',
            icon: 'Frowning Face',
          },
        },
        elements: [
          {
            question_type: 'card',
            question_override: {
              preface: '',
              body: '',
            },
            context: {
              help_text: '',
              left: {
                icon: {
                  above: '',
                  center: '',
                  below: '',
                },
                text: {
                  above: '',
                  center: 'I have missed out on',
                  below: '',
                },
                subtext: {
                  above: '',
                  center: '',
                  below: '',
                },
                value: '0.1',
              },
              right: {
                icon: {
                  above: '',
                  center: '',
                  below: '',
                },
                text: {
                  above: '',
                  center: 'I ended up doing',
                  below: '',
                },
                subtext: {
                  above: '',
                  center: '',
                  below: '',
                },
                value: '0.2',
              },
              slider: {
                default: '',
                min: '',
                max: '',
                step: '',
                ticks: false,
              },
              input: {
                body: '',
                placeholder: '',
                values: [],
              },
              radio: [],
              multicard: [],
              dragdrop: [],
            },
          },
        ],
        icon: question13Graphic,
        dimensions: ['245px', '174px'],
      },
      {
        preface: '',
        body: 'When it comes to trying new products or\n services, I find myself focusing on',
        context: {
          above: '',
          center: '',
          below: {
            body: '',
            icon: 'gold_chalice_with_target_and_badge',
          },
        },
        elements: [
          {
            question_type: 'card',
            question_override: {
              preface: '',
              body: '',
            },
            context: {
              help_text: '',
              left: {
                icon: {
                  above: '',
                  center: '',
                  below: '',
                },
                text: {
                  above: '',
                  center: 'The risk',
                  below: '',
                },
                subtext: {
                  above: '',
                  center: '',
                  below: '',
                },
                value: '0.1',
              },
              right: {
                icon: {
                  above: '',
                  center: '',
                  below: '',
                },
                text: {
                  above: '',
                  center: 'The benefit',
                  below: '',
                },
                subtext: {
                  above: '',
                  center: '',
                  below: '',
                },
                value: '0.2',
              },
              slider: {
                default: '',
                min: '',
                max: '',
                step: '',
                ticks: false,
              },
              input: {
                body: '',
                placeholder: '',
                values: [],
              },
              radio: [],
              multicard: [],
              dragdrop: [],
            },
          },
        ],
        icon: question14Graphic,
        dimensions: ['295px', '222px'],
      },
      {
        preface: '',
        body: 'When it comes to big decisions in my\n life, I often focus on:',
        context: {
          above: '',
          center: '',
          below: {
            body: '',
            icon: 'directions_post_with_question_mark',
          },
        },
        elements: [
          {
            question_type: 'card',
            question_override: {
              preface: '',
              body: '',
            },
            context: {
              help_text: '',
              left: {
                icon: {
                  above: '',
                  center: '',
                  below: '',
                },
                text: {
                  above: '',
                  center: 'What others expect of me',
                  below: '',
                },
                subtext: {
                  above: '',
                  center: '',
                  below: '',
                },
                value: '0.1',
              },
              right: {
                icon: {
                  above: '',
                  center: '',
                  below: '',
                },
                text: {
                  above: '',
                  center: 'What I aspire to be',
                  below: '',
                },
                subtext: {
                  above: '',
                  center: '',
                  below: '',
                },
                value: '0.2',
              },
              slider: {
                default: '',
                min: '',
                max: '',
                step: '',
                ticks: false,
              },
              input: {
                body: '',
                placeholder: '',
                values: [],
              },
              radio: [],
              multicard: [],
              dragdrop: [],
            },
          },
        ],
        icon: question15Graphic,
        dimensions: ['220px', '221px'],
      },
    ],
    [
      {
        preface: '',
        body: 'I tend to do way too much research before\n making a large purchase.',
        context: {
          above: '',
          center: '',
          below: {
            body: '',
            icon: 'phone_car_computer',
          },
        },
        elements: [
          {
            question_type: 'slider-with-notation',
            question_override: {
              preface: '',
              body: '',
            },
            context: {
              help_text: '',
              left: {
                icon: {
                  above: '',
                  center: '',
                  below: '',
                },
                text: {
                  above: '',
                  center: '',
                  below: 'Strongly Disagree',
                },
                subtext: {
                  above: '',
                  center: '',
                  below: '',
                },
                value: '0',
              },
              right: {
                icon: {
                  above: '',
                  center: '',
                  below: '',
                },
                text: {
                  above: '',
                  center: '',
                  below: 'Strongly Agree',
                },
                subtext: {
                  above: '',
                  center: '',
                  below: '',
                },
                value: '8',
              },
              slider: {
                default: '4',
                min: '0',
                max: '8',
                step: '1',
                ticks: true,
              },
              input: {
                body: '',
                placeholder: '',
                values: [],
              },
              radio: [],
              multicard: [],
              dragdrop: [],
            },
          },
        ],
        icon: question16Graphic,
        dimensions: ['594px', '159.14px'],
      },
      {
        preface: '',
        body: 'I tend to spend too much time looking for what\n to watch instead of watching.',
        context: {
          above: '',
          center: '',
          below: {
            body: '',
            icon: 'screen_with_playbar',
          },
        },
        elements: [
          {
            question_type: 'slider-with-notation',
            question_override: {
              preface: '',
              body: '',
            },
            context: {
              help_text: '',
              left: {
                icon: {
                  above: '',
                  center: '',
                  below: '',
                },
                text: {
                  above: '',
                  center: '',
                  below: 'Strongly Disagree',
                },
                subtext: {
                  above: '',
                  center: '',
                  below: '',
                },
                value: '0',
              },
              right: {
                icon: {
                  above: '',
                  center: '',
                  below: '',
                },
                text: {
                  above: '',
                  center: '',
                  below: 'Strongly Agree',
                },
                subtext: {
                  above: '',
                  center: '',
                  below: '',
                },
                value: '8',
              },
              slider: {
                default: '4',
                min: '0',
                max: '8',
                step: '1',
                ticks: true,
              },
              input: {
                body: '',
                placeholder: '',
                values: [],
              },
              radio: [],
              multicard: [],
              dragdrop: [],
            },
          },
        ],
        icon: question17Graphic,
        dimensions: ['402px', '235px'],
      },
      {
        preface: '',
        body: 'I think of myself as a perfectionist, never\n comfortable settling for “good enough”.',
        context: {
          above: '',
          center: '',
          below: {
            body: '',
            icon: 'person_with_thumbs_up',
          },
        },
        elements: [
          {
            question_type: 'slider-with-notation',
            question_override: {
              preface: '',
              body: '',
            },
            context: {
              help_text: '',
              left: {
                icon: {
                  above: '',
                  center: '',
                  below: '',
                },
                text: {
                  above: '',
                  center: '',
                  below: 'Strongly Disagree',
                },
                subtext: {
                  above: '',
                  center: '',
                  below: '',
                },
                value: '0',
              },
              right: {
                icon: {
                  above: '',
                  center: '',
                  below: '',
                },
                text: {
                  above: '',
                  center: '',
                  below: 'Strongly Agree',
                },
                subtext: {
                  above: '',
                  center: '',
                  below: '',
                },
                value: '8',
              },
              slider: {
                default: '4',
                min: '0',
                max: '8',
                step: '1',
                ticks: true,
              },
              input: {
                body: '',
                placeholder: '',
                values: [],
              },
              radio: [],
              multicard: [],
              dragdrop: [],
            },
          },
        ],
        icon: question18Graphic,
        dimensions: ['118px', '211.24px'],
      },
      {
        preface: '',
        body: 'In a restaurant, I like to look over a menu\n carefully to make sure I choose the best option',
        context: {
          above: '',
          center: '',
          below: {
            body: '',
            icon: 'menu_with_fork_and_spoon',
          },
        },
        elements: [
          {
            question_type: 'slider-with-notation',
            question_override: {
              preface: '',
              body: '',
            },
            context: {
              help_text: '',
              left: {
                icon: {
                  above: '',
                  center: '',
                  below: '',
                },
                text: {
                  above: '',
                  center: '',
                  below: 'Strongly Disagree',
                },
                subtext: {
                  above: '',
                  center: '',
                  below: '',
                },
                value: '0',
              },
              right: {
                icon: {
                  above: '',
                  center: '',
                  below: '',
                },
                text: {
                  above: '',
                  center: '',
                  below: 'Strongly Agree',
                },
                subtext: {
                  above: '',
                  center: '',
                  below: '',
                },
                value: '8',
              },
              slider: {
                default: '4',
                min: '0',
                max: '8',
                step: '1',
                ticks: true,
              },
              input: {
                body: '',
                placeholder: '',
                values: [],
              },
              radio: [],
              multicard: [],
              dragdrop: [],
            },
          },
        ],
        icon: question19Graphic,
        dimensions: ['252px', '252px'],
      },
      {
        preface:
          'Below are some key values, and if you do not see ones that are important to you, please add in the Green box.',
        body: 'Please rank in order of importance at least 3 to 5 of your core values by dragging and dropping them in the blue box.',
        context: {
          above: '',
          center: '',
          below: {
            body: '',
            icon: '',
          },
        },
        elements: [
          {
            question_type: 'dragdrop',
            question_override: {
              preface: '',
              body: '',
            },
            context: {
              help_text: '',
              left: {
                icon: {
                  above: '',
                  center: '',
                  below: '',
                },
                text: {
                  above: '',
                  center: '',
                  below: '',
                },
                subtext: {
                  above: '',
                  center: '',
                  below: '',
                },
                value: '',
              },
              right: {
                icon: {
                  above: '',
                  center: '',
                  below: '',
                },
                text: {
                  above: '',
                  center: '',
                  below: '',
                },
                subtext: {
                  above: '',
                  center: '',
                  below: '',
                },
                value: '',
              },
              input: {
                body: '',
                placeholder: '',
                values: [],
              },
              radio: [],
              multicard: [],
              dragdrop: [
                ['Security', '0.1'],
                ['Freedom', '0.2'],
                ['Travel', '0.3'],
                ['Family', '0.4'],
                ['Helping Others', '0.1'],
                ['Health', '0.2'],
                ['Community', '0.1'],
                ['Type your value', '0.0'],
                ['Type your value', '0.0'],
                ['Type your value', '0.0'],
              ],
            },
          },
        ],
        icon: '',
      },
    ],
  ],
  responses: [],
  results: {},
  report: {
    client: {
      template_id: '',
      link: '',
      last_accessed: '',
    },
    advisor: {
      template_id: '',
      link: '',
    },
  },
  status: 'created',
  percent_complete: 0,
  last_question_completed: 0,
  created_at: '2021-08-13T05:01:24.649Z  --> ISO8601 Date String',
  updated_at: '2021-08-13T05:01:24.649Z  --> ISO8601 Date String',
  completed_at: '2021-08-13T05:01:24.649Z  --> ISO8601 Date String',
  meta_data: {},
};

// Export const QuestionData = [
//   {
//     Id: 0,
//     QuestionDescription:
//       'Alrighty then, let’s get started…what do you see here?',
//     QuestionText: 'Is the glass half empty or half full?',
//     Type: {
//       Id: 0,
//       Type: 'RadioButton',

//       Options: ['Half Empty', 'Half Full', 'I just see water'],
//     },
//     Graphic: question1Graphic,
//     DotsOnPage: 0,
//   },
//   {
//     Id: 1,
//     QuestionDescription:
//       'Think of individuals like you, people you instinctively compare yourself to.\n What is the likelihood that each of the following events will happen to you personally as compared to them?',

//     QuestionText:
//       'Being publicly recognized for a professional or personal achievement',
//     Type: {
//       Id: 1,
//       Type: 'SliderWithTwoGraphics',
//     },
//     Graphic: question2Graphic,
//     DotsOnPage: 1,
//   },
//   {
//     Id: 2,
//     QuestionDescription:
//       'Think of individuals like you, people you instinctively compare yourself to.\n What is the likelihood that each of the following events will happen to you personally as compared to them?',

//     QuestionText:
//       'Win a free vacation for you and four of your close friends or family',
//     Type: {
//       Id: 1,
//       Type: 'SliderWithTwoGraphics',
//     },
//     Graphic: question3Graphic,
//     DotsOnPage: 2,
//   },
//   {
//     Id: 3,
//     QuestionDescription:
//       'Think of individuals like you, people you instinctively compare yourself to.\n What is the likelihood that each of the following events will happen to you personally as compared to them?',

//     QuestionText: 'Achieve a comfortable lifestyle in retirement.',
//     Type: {
//       Id: 1,
//       Type: 'SliderWithTwoGraphics',
//     },
//     Graphic: question4Graphic,
//     DotsOnPage: 2,
//   },
//   {
//     Id: 4,
//     QuestionDescription:
//       'Think of individuals like you, people you instinctively compare yourself to.\n What is the likelihood that each of the following events will happen to you personally as compared to them?',

//     QuestionText: 'Getting the Flu or bad cold within the next 12 months',
//     Type: {
//       Id: 1,
//       Type: 'SliderWithTwoGraphics',
//     },
//     Graphic: question5Graphic,
//     DotsOnPage: 2,
//   },
//   {
//     Id: 5,
//     QuestionDescription:
//       'Think of individuals like you, people you instinctively compare yourself to.\n What is the likelihood that each of the following events will happen to you personally as compared to them?',

//     QuestionText:
//       'Losing more money than your peers in the market in the next 3 years',
//     Type: {
//       Id: 1,
//       Type: 'SliderWithTwoGraphics',
//     },
//     Graphic: question6Graphic,
//     DotsOnPage: 2,
//   },
//   {
//     Id: 6,
//     QuestionDescription:
//       'Imagine you are taking a train to work that runs once every 30 mins. Unfortunately, you miss the train today by 5 minutes…',

//     QuestionText: 'How much would you regret leaving your home late by 5 mins?',
//     Type: {
//       Id: 2,
//       Type: 'SliderWithOneGraphic',
//       Options: ['Well, thats Life!', 'Ahh I hate it!'],
//     },
//     Graphic: question7Graphic,
//     DotsOnPage: 1,
//   },
//   {
//     Id: 7,
//     QuestionDescription:
//       'Don’t hate us…you missed it, but it’s just by a whisker. You can still see it leaving the station.',

//     QuestionText: 'How much would you regret missing it by just a few seconds?',
//     Type: {
//       Id: 2,
//       Type: 'SliderWithOneGraphic',
//       Options: ['Well, thats Life!', 'Ahh I hate it!'],
//     },
//     Graphic: question8Graphic,
//     DotsOnPage: 2,
//   },
//   {
//     Id: 8,
//     QuestionDescription:
//       'Imagine you are driving to an important meeting and the traffic seems a little worse today. Worse still, you accidentally forgot your phone and you feel you may be late by at least 15 mins if you run back home to get it. You remember an alternative route you have taken a few times before that seemed like it was faster.  ',

//     QuestionText: 'What would you do?',
//     Type: {
//       Id: 0,
//       Type: 'RadioButton',

//       Options: ['Stick to the current router', 'Take the alternate route'],
//     },
//     Graphic: question9Graphic,
//     DotsOnPage: 3,
//   },
//   {
//     Id: 9,
//     QuestionDescription:
//       'You just made a large purchase that you have always wanted to buy. A week after buying it, the price of it is now slashed by third.',

//     QuestionText: 'How would you feel about it?',
//     Type: {
//       Id: 0,
//       Type: 'RadioButton',
//       Options: ['Ahh I hate it!', 'Well, thats Life!'],
//     },
//     Graphic: question10Graphic,
//     DotsOnPage: 4,
//   },
//   {
//     Id: 10,
//     QuestionDescription:
//       'I wouldn’t have cared much had the price been slashed after…',

//     QuestionText: 'Pick when in the future it wouldn’t have bothered you',
//     Type: {
//       Id: 0,
//       Type: 'RadioButton',
//       Options: ['Ahh I hate it!', 'Well, thats Life!'],
//     },
//     Graphic: question11Graphic,
//     DotsOnPage: 4,
//   },
//   {
//     Id: 11,
//     QuestionDescription: '',

//     QuestionText: 'In life, I often find myself focusing on',
//     Type: {
//       Id: 0,
//       Type: 'RadioButton',
//       Options: ['Losses', 'Gain'],
//     },
//     Graphic: question12Graphic,
//     DotsOnPage: 1,
//   },
//   {
//     Id: 12,
//     QuestionDescription: '',

//     QuestionText:
//       'When it comes to regret, I tend to find myself regretting things that:',
//     Type: {
//       Id: 0,
//       Type: 'RadioButton',
//       Options: ['I have missed out on', 'I ended up doing'],
//     },
//     Graphic: question13Graphic,
//     DotsOnPage: 1,
//   },
//   {
//     Id: 13,
//     QuestionDescription: '',

//     QuestionText:
//       'When it comes to trying new products or services, I find myself focusing on',
//     Type: {
//       Id: 0,
//       Type: 'RadioButton',
//       Options: ['The Risk', 'The Benefit'],
//     },
//     Graphic: question14Graphic,
//     DotsOnPage: 1,
//   },
//   {
//     Id: 14,
//     QuestionDescription: '',

//     QuestionText:
//       'When it comes to big decisions in my life, I often focus on:',
//     Type: {
//       Id: 0,
//       Type: 'RadioButton',
//       Options: ['What others expect of me', 'What I aspire to be'],
//     },
//     Graphic: question15Graphic,
//     DotsOnPage: 1,
//   },
//   {
//     Id: 15,
//     QuestionDescription: '',

//     QuestionText:
//       'I tend to do way too much research before making a large purchase.',
//     Type: {
//       Id: 3,
//       Type: 'SliderWithOneGraphicAndNotation',
//       Options: ['Strongly Disagree', 'Strongly Agree'],
//     },
//     Graphic: question16Graphic,
//     DotsOnPage: 1,
//   },
//   {
//     Id: 16,
//     QuestionDescription: '',

//     QuestionText:
//       'I tend to spend too much time looking for what to watch instead of watching.',
//     Type: {
//       Id: 3,
//       Type: 'SliderWithOneGraphicAndNotation',
//       Options: ['Strongly Disagree', 'Strongly Agree'],
//     },
//     Graphic: question17Graphic,
//     DotsOnPage: 1,
//   },
//   {
//     Id: 17,
//     QuestionDescription: '',

//     QuestionText:
//       'I think of myself as a perfectionist, never comfortable settling for “good enough”.',
//     Type: {
//       Id: 3,
//       Type: 'SliderWithOneGraphicAndNotation',
//       Options: ['Strongly Disagree', 'Strongly Agree'],
//     },
//     Graphic: question18Graphic,
//     DotsOnPage: 1,
//   },
//   {
//     Id: 5,
//     QuestionDescription: '',

//     QuestionText:
//       'In a restaurant, I like to look over a menu carefully to make sure I choose the best option',
//     Type: {
//       Id: 3,
//       Type: 'SliderWithOneGraphicAndNotation',
//       Options: ['Strongly Disagree', 'Strongly Agree'],
//     },
//     Graphic: question19Graphic,
//     DotsOnPage: 1,
//   },
//   {
//     Id: 19,
//     QuestionDescription:
//       'Below are some key values, and if you do not see ones that are important to you, please add in the Green box.',

//     QuestionText:
//       'Please rank in order of importance at least 3 to 5 of your core values by dragging and dropping them in the blue box.',
//     Type: {
//       Id: 4,
//       Type: 'DragAndDrop',
//       Options: [
//         'Security',
//         'Freedom',
//         'Travel',
//         'Family',
//         'Helping Others',
//         'Health',
//         'Community',
//       ],
//     },
//     DotsOnPage: 1,
//   },
// ];
