const data = [
    {
        name: 'Qatar',
        group: 'A',
        flag: '//ssl.gstatic.com/onebox/media/sports/logos/h0FNA5YxLzWChHS5K0o4gw_48x48.png'
    },
    {
        name: 'Ecuador',
        group: 'A',
        flag: '//ssl.gstatic.com/onebox/media/sports/logos/AKqvkBpIyr-iLOK7Ig7-yQ_48x48.png'
    },
    {
        name: 'Senegal',
        group: 'A',
        flag: '//ssl.gstatic.com/onebox/media/sports/logos/zw3ac5sIbH4DS6zP5auOkQ_48x48.png'
    },
    {
        name: 'Netherlands',
        group: 'A',
        flag: '//ssl.gstatic.com/onebox/media/sports/logos/8GEqzfLegwFFpe6X2BODTg_48x48.png'
    },
    {
        name: 'England',
        group: 'B',
        flag: '//ssl.gstatic.com/onebox/media/sports/logos/DTqIL8Ba3KIuxGkpXw5ayA_48x48.png'
    },
    {
        name: 'Iran',
        group: 'B',
        flag: '//ssl.gstatic.com/onebox/media/sports/logos/1oq8Fy7ETpBpZNaCA22ArQ_48x48.png'
    },
    {
        name: 'United States',
        group: 'B',
        flag: '//ssl.gstatic.com/onebox/media/sports/logos/wj9uZvn_vZrelLFGH8fnPA_48x48.png'
    },
    {
        name: 'Wales',
        group: 'B',
        flag: '//ssl.gstatic.com/onebox/media/sports/logos/1JjnDm6Es30LryHzbudyEw_48x48.png'
    },
    {
        name: 'Argentina',
        group: 'C',
        flag: '//ssl.gstatic.com/onebox/media/sports/logos/1xBWyjjkA6vEWopPK3lIPA_48x48.png'
    },
    {
        name: 'Saudi Arabia',
        group: 'C',
        flag: '//ssl.gstatic.com/onebox/media/sports/logos/QoAJxO46fHid3_T-7nRZ0Q_48x48.png'
    },
    {
        name: 'Mexico',
        group: 'C',
        flag: '//ssl.gstatic.com/onebox/media/sports/logos/yJF9xqmUGenD8108FJbg9A_48x48.png'
    },
    {
        name: 'Poland',
        group: 'C',
        flag: '//ssl.gstatic.com/onebox/media/sports/logos/yTS_Piy3M1wUBnqU0n5aAw_48x48.png'
    },
    {
        name: 'France',
        group: 'D',
        flag: '//ssl.gstatic.com/onebox/media/sports/logos/z3JEQB3coEAGLCJBEUzQ2A_48x48.png'
    },
    {
        name: 'Australia',
        group: 'D',
        flag: '//ssl.gstatic.com/onebox/media/sports/logos/jSgw5z0EPOLzdUi-Aomq7Q_48x48.png'
    },
    {
        name: 'Denmark',
        group: 'D',
        flag: '//ssl.gstatic.com/onebox/media/sports/logos/LaOvu-pyRqRso6uzff55XA_48x48.png'
    },
    {
        name: 'Tunisia',
        group: 'D',
        flag: '//ssl.gstatic.com/onebox/media/sports/logos/Xs33c9XVUJBX0IkeFn_bIw_48x48.png'
    },
    {
        name: 'Spain',
        group: 'E',
        flag: '//ssl.gstatic.com/onebox/media/sports/logos/5hLkf7KFHhmpaiOJQv8LmA_48x48.png'
    },
    {
        name: 'Costa Rica',
        group: 'E',
        flag: '//ssl.gstatic.com/onebox/media/sports/logos/ixZiM5pj2IvvYc15k-zfeQ_48x48.png'
    },
    {
        name: 'Germany',
        group: 'E',
        flag: '//ssl.gstatic.com/onebox/media/sports/logos/h1FhPLmDg9AHXzhygqvVPg_48x48.png'
    },
    {
        name: 'Japan',
        group: 'E',
        flag: '//ssl.gstatic.com/onebox/media/sports/logos/by4OltvtZz7taxuQtkiP3A_48x48.png'
    },

    {
        name: 'Belgium',
        group: 'F',
        flag: '//ssl.gstatic.com/onebox/media/sports/logos/6SF7yEoB60bU5knw-M7R5Q_48x48.png'
    },
    {
        name: 'Canada',
        group: 'F',
        flag: '//ssl.gstatic.com/onebox/media/sports/logos/H23oIEP6qK-zNc3O8abnIA_48x48.png'
    },
    {
        name: 'Morocco',
        group: 'F',
        flag: '//ssl.gstatic.com/onebox/media/sports/logos/I3gt2Ew39ux3GGdZ-4JE3g_48x48.png'
    },
    {
        name: 'Croatia',
        group: 'F',
        flag: '//ssl.gstatic.com/onebox/media/sports/logos/9toerdOg8xW4CRhDaZxsyw_48x48.png'
    },
    {
        name: 'Brazil',
        group: 'G',
        flag: '//ssl.gstatic.com/onebox/media/sports/logos/zKLzoJVYz0bb6oAnPUdwWQ_48x48.png'
    },
    {
        name: 'Serbia',
        group: 'G',
        flag: '//ssl.gstatic.com/onebox/media/sports/logos/xyh1vmZ-xJH2iJCKjqS1Ow_48x48.png'
    },
    {
        name: 'Switzerland',
        group: 'G',
        flag: '//ssl.gstatic.com/onebox/media/sports/logos/1hy9ek4dOIffYULM6k1fqg_48x48.png'
    },
    {
        name: 'Cameroon',
        group: 'G',
        flag: '//ssl.gstatic.com/onebox/media/sports/logos/fmHyTSbJ-cYbY6WJzvqaZQ_48x48.png'
    },
    {
        name: 'Portugal',
        group: 'H',
        flag: '//ssl.gstatic.com/onebox/media/sports/logos/HJ3_2c4w791nZJj7n-Lj3Q_48x48.png'
    },
    {
        name: 'Ghana',
        group: 'H',
        flag: '//ssl.gstatic.com/onebox/media/sports/logos/VJQ1emg0TOubjGnap4vWuw_48x48.png'
    },
    {
        name: 'Uruguay',
        group: 'H',
        flag: '//ssl.gstatic.com/onebox/media/sports/logos/KnSUdQWiGRoy89q4x85IgA_48x48.png'
    },
    {
        name: 'South Korea',
        group: 'H',
        flag: '//ssl.gstatic.com/onebox/media/sports/logos/Uu5pwNmMHGd5bCooKrS3Lw_48x48.png'
    },
]

export default data;