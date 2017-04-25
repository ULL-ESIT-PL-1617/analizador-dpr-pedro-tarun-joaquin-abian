# Analizador DPR

* [Repositorio Github](https://github.com/ULL-ESIT-PL-1617/analizador-dpr-pedro-tarun-joaquin-abian)

---

# Participantes

| Nombre | Correo Electrónico | Página personal Github |
| --- | --- | --- |
| Abián Torres Torres | alu0100887686@ull.edu.es | [alu0100887686](https://alu0100887686.github.io/) |
| Tarun Mohandas Daryanani | alu0100891782@ull.edu.es | [alu0100891782](https://alu0100891782.github.io/) |
| Pedro Miguel Lagüera Cabrera | alu0100891485@ull.edu.es | [plaguera](https://plaguera.github.io/) |
| Joaquín Sanchiz Navarro | alu0100893755@ull.edu.es | [joaquinsanchiz](https://joaquinsanchiz.github.io/) |

---

## [Descripción de la Práctica](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/practicas/practicarecdescparser.html)

Σ = WHITES, ADDOP, MULOP, NUM, ID, STRING, COMPARISONOPERATOR, ONELINECOMMENT, MULTIPLELINECOMMENT, ONECHAROPERATORS, 
WHILE, THEN, IF, ELSE, FUNCTION, P 

V = statement, condition, statements, expression, condition, term, factor

Reglas de Producción:
  1. statements = (statement)*
  2. statement  = (CONST ID = expression | ID (statement*)?| FUNCTION ((statement|,)*) ({statements})?| P expression | IF (condition) THEN statement| WHILE (condition) THEN statement| expression);
  3. condition  = expression COMPARISON expression
  4. expression = term ADDOP term
  5. term       = factor (* term)?
  6. factor     = NUM | ID | (expression)
  
- NOTA: NO USAR ';' EN LA ÚLTIMA LÍNEA DE CADA ENTORNO

* Ejemplo de uso de funciones:

   a = FUNCTION (c) {
    b = 2 + 1;
    c = 9
   };
   a(8)


   [
     {
       "type": "=",
       "left": {
         "type": "ID",
         "value": "a"
       },
       "right": {
         "type": "FUNCTION",
         "parameters": [
           {
             "type": "ID",
             "value": "c"
           }
         ],
         "value": [
           {
             "type": "=",
             "left": {
               "type": "ID",
               "value": "b"
             },
             "right": {
               "type": "+",
               "left": {
                 "type": "NUM",
                 "value": 2
               },
               "right": {
                 "type": "NUM",
                 "value": 1
               }
             }
           },
           {
             "type": "=",
             "left": {
               "type": "ID",
               "value": "c"
             },
             "right": {
               "type": "NUM",
               "value": 9
             }
           }
         ]
       }
     },
     {
       "type": "FUNCTION CALL",
       "left": {
         "type": "ID",
         "value": "a"
       },
       "right": [
         {
           "type": "NUM",
           "value": 8
         }
       ]
     }
    ] 

* Ejemplo de uso de constantes:

   CONST x = 2 ;

   {
     "type": "=",
     "left": {
       "type": "CONST",
       "value": "x"
     },
     "right": {
       "type": "NUM",
       "value": 2
     }
   }

* Ejemplo de uso de bucles:
    WHILE 1==1 THEN a = 1+2
 
     {
      "type": "WHILE",
      "left": {
        "type": "==",
        "left": {
          "type": "NUM",
          "value": 1
        },
        "right": {
          "type": "NUM",
          "value": 1
        }
      },
      "right": {
        "type": "=",
        "left": {
          "type": "ID",
          "value": "a"
        },
        "right": {
          "type": "+",
          "left": {
            "type": "NUM",
            "value": 1
          },
          "right": {
            "type": "NUM",
            "value": 2
          }
        }
      }
    }
    
* Ejemplo de uso de condicionales:
  IF a==b THEN a = a+1
    
  {
  "type": "IF",
  "left": {
    "type": "==",
    "left": {
      "type": "ID",
      "value": "a"
    },
    "right": {
      "type": "ID",
      "value": "b"
    }
  },
  "right": {
    "type": "=",
    "left": {
      "type": "ID",
      "value": "a"
    },
    "right": {
      "type": "+",
      "left": {
        "type": "ID",
        "value": "a"
      },
      "right": {
        "type": "NUM",
        "value": 1
      }
    }
  }
}
---

## [Página de la Asignatura](https://campusvirtual.ull.es/1617/course/view.php?id=1148)

---

### Despliegue en Heroku

| Dirección Heroku |
| ---  |
|  [Aplicación](https://blooming-temple-32843.herokuapp.com/) |

