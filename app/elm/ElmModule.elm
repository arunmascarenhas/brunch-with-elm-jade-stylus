module ElmModule exposing (main)

import Html exposing (div, h1, ul, li, a, text)
import Html.Attributes exposing (id, href)


-- Main
main =
  div [ id "content" ]
    [ h1 [] []
    , ul []
        [ li [] [ a [ href "http://brunch.io" ] [ text "Brunch Homepage" ] ]
        , li [] [ a [ href "http://elm-lang.org/" ] [ text "Elm Homepage" ] ]
        , li [] [ a [ href "http://jade-lang.com/" ] [ text "Jade Homepage" ] ]
        , li [] [ a [ href "http://stylus-lang.com/" ] [ text "Stylus Homepage" ] ]
        ]
    ]

