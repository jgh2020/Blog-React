import { twelfth_content, eleventh_content, tenth_content,ninth_content, eighth_content, seventh_content, sixth_content, fifth_content, fourth_content, third_content, second_content, first_content } from './blogContent';
import blind from './img/blind.jpg';
import butter from './img/butter.jpg';
import butterfly from './img/butterfly.jpg';
import frog from './img/frog.png';
import nail from './img/nail.jpg';
import obstacle from './img/obstacle.jpg';

let start_posts = [
    {id : 11, title : "The Group of Frogs", image : frog, content : twelfth_content, date : "Dec 12, 2020", update_date : "(Update : Jun 6, 2021)", thumb : 5},
    {id : 10, title : "A Pound of Butter", image : butter, content : eleventh_content, date : "Nov 11, 2020", update_date : "(Update : May 5, 2021)", thumb : 3},
    {id : 9, title : "Control Your Temper", image : nail, content : tenth_content, date : "Oct 10, 2020", update_date : "", thumb : 2},
    {id : 8, title : "The Blind Girl", image : blind, content : ninth_content, date : "Sep 9, 2020", update_date : "(Update : Apr 4, 2021)", thumb : 9},
    {id : 7, title : "The Obstacle In Our Path", image : obstacle, content : eighth_content, date : "Aug 8, 2020", update_date : "", thumb : 8},
    {id : 6, title : "The Butterfly", image : butterfly, content : seventh_content, date : "Jul 7, 2020", update_date : "", thumb : 2},
    {id : 5, title : "The Group of Frogs", image : frog, content : sixth_content, date : "Jun 6, 2020", update_date : "(Update : Mar 3, 2021)", thumb : 0}, 
    {id : 4, title : "A Pound of Butter", image : butter, content : fifth_content, date : "May 5, 2020", update_date : "", thumb : 0}, 
    {id : 3, title : "Control Your Temper", image : nail, content : fourth_content, date : "Apr 4, 2020", update_date : "", thumb : 3},
    {id : 2, title : "The Blind Girl", image : blind, content : third_content, date : "Mar 3, 2020", update_date : "(Update : Jan 2, 2021)", thumb : 2},
    {id : 1, title : "The Obstacle In Our Path", image : obstacle, content : second_content, date : "Feb 2, 2020", update_date : "", thumb : 5},
    {id : 0, title : "The Butterfly", image : butterfly, content : first_content, date : "Jan 1, 2020", update_date : "", thumb : 7}
];

let start_comms = [
  [{visitor : "visitor12", date : "Dec 12, 2020", comment : "Interesting!"}],
  [{visitor : "visitor11", date : "Nov 11, 2020", comment : "I like it."}],
  [{visitor : "visitor10", date : "Oct 10, 2020", comment : "Funny story!"}],
  [{visitor : "visitor9", date : "Sep 9, 2020", comment : "Sad story!"}],
  [{visitor : "visitor8", date : "Aug 8, 2020", comment : "interesting!"}],
  [{visitor : "visitor7", date : "Jul 7, 2020", comment : "I like it."}, {visitor : "Wes", date : "Jul 7, 2021", comment : "interesting!"}],
  [{visitor : "visitor6", date : "Jun 6, 2020", comment : "interesting!"}, {visitor : "James", date : "Jun 6, 2021", comment : "Funny story!"}],
  [{visitor : "visitor5", date : "May 5, 2020", comment : "Smooth like butter!"}, {visitor : "Army", date : "May 5, 2021", comment : "BTS"}, {visitor : "Brisket", date : "Jun 6, 2021", comment : "I like it."}],
  [{visitor : "visitor4", date : "Apr 4, 2020", comment : "interesting!"}],
  [{visitor : "visitor3", date : "Mar 3, 2020", comment : "What a love!"}],
  [{visitor : "visitor2", date : "Feb 2, 2020", comment : "I like it."}], 
  [{visitor : "visitor1", date : "Jan 1, 2020", comment : "Beautiful!"}]
];
  export {start_posts, start_comms};