    var click=0;

    // ========================================
    // Data Template 
    // ========================================
    
    var states = new Array();
      states[0] = {type:"regular",header:"Do not include lengthy irrelevant Objectives. Potential employers are really not bothered about your desire to be a superhero.",example:"To work hard for a large multinational corporation in order to absorb years of business wisdom and experience such that I can further my career in Marketing and Advertising.",response:"If you want challenging, you should go river rafting."};
      states[1] = {type:"regular",header:"Do not include lengthy irrelevant Objectives. Potential employers are really not bothered about your desire to be a superhero.",example:"Seeking assignments in a large and reputed company that will allow me to become a great force who can influence the functioning of the economy",response:"Did he just say he wants to be superman?"};
      states[2] = {type:"regular",header:"Do not use unprofessional fonts and/ or formatting. Colourful fonts will end up giving the reader a headache and maybe some temporary blindness.",example:"Please read the text marked in red to understand how my career has evolved through the years",response:"My eyes! Dear God! My eyes!"};
      states[3] = {type:"regular",header:"Do not Brag. It gives the impression that you are trying to be smarter than you actually are; trying being the keyword.",example:"Trekked through the jungles of India where I encountered and defeated a group of hungry tigers. As a result of this experience, I believe that I have a unique understanding of how the corporate jungle functions.",response:" So corporate jungles are like rainforests?"};
      states[4] = {type:"regular",header:"Do not Brag. It gives the impression that you are trying to be smarter than you actually are; trying being the keyword.",example:"In my previous position I was in charge of everything in my department. I knew more than my boss and was responsible for single handedly getting him fired.",response:"I hope he realizes that this is not helping his chances of getting this job"};
      states[5] = {type:"regular",header:"Do not use Jargon. It will just stress the reader out and that is the last thing you want to be doing.",example:"My understanding of the strategically positioning a product in a highly differentiated and saturated zero sum market environment is unparalleled",response:"I have no clue what he is talking about but I think I will just nod along"};
      states[6] = {type:"regular",header:"Do not use Jargon. It will just stress the reader out and that is the last thing you want to be doing.",example:"Have used a complex regression based model to accurately create a correlation matrix that helped my company gain a profound understanding of the Perold Sharpe rebalancing method",response:"Perold Sharpe, hmmmm, does not ring a bell"};
      states[7] = {type:"image",header:"Do not put your photos. Your resume should not have your images, unless its a modeling assignment that you are looking for.",source:"assets/images/demo_page/passport.JPG",response:"Where did that come from?"};
      states[8] = {type:"regular",header:"Do not use more than one page. Including irrelevant information to extend your resume will most likely result in your resume never even seeing the light of day.",example:"Please turn to page 13 to view experience with rogue traders",response:"Page what? That has got to be a typo right?"};
      states[9] = {type:"regular",header:"Do not use more than one page. Including irrelevant information to extend your resume will most likely result in your resume never even seeing the light of day.",example:"",response:"Dissertation In?"};
      states[10] = {type:"regular",header:"Always use good grammar. It could lead to a lot of misunderstanding",example:"I am graduated from DHG University in Management Study’s. We had lot of assignments; that were to make the peoples to buy us products!",response:"Did I not mention fluent English as one of the job requirements?"};
      states[11] = {type:"regular",header:"Always use good grammar. It could lead to a lot of misunderstanding",example:"At my lastest job, I am doing the error checking of the products with my exclesent computering abilitty",response:"I do not think your previous job gave any emphasis on your language skills"};
      states[12] = {type:"regular",header:"Do not use Unprofessional Email addresses. Employers do not want to see or communicate with you through your personal ids.",example:"sexydancer@hotclubs.com",response:"I am not going to contact you with that. My wife will think I am having an affair!"};
      states[13] = {type:"regular",header:"Do not use Unprofessional Email addresses. Employers do not want to see or communicate with you through your personal ids.",example:"hotdude_007@hotmale.com",response:"Ian Fleming is probably turning in his grave"};
      states[14] = {type:"regular",header:"Do not include your Hobbies. It is not professional and your potential employer does not want to know what you do in your free time",example:"Health foods - raw eggs, Boxing, Working Out, Lifting Heavy Objects and Running",response:"Rocky?"};
      states[15] = {type:"regular",header:"Do not include your Hobbies. It is not professional and your potential employer does not want to know what you do in your free time",example:"Volunteer work for taking care of the elderly and vegetable people",response:"I have heard of mole men and bodysnatchers. Who are these vegetable people?"};
      states[16] = {type:"regular",header:"Do not include References, no one really cares",example:"You can talk to my mother and father. I keep my room neat and tidy.",response:"So should we hire you as a cleaner?"};
      states[17] = {type:"regular",header:"Do not include References, no one really cares",example:"My reference is GOD.",response:"And how do I get in touch with him to verify this?"};
     