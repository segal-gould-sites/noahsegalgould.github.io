/**
 * Noah Segal-Gould <ns2349@bard.edu> modified from
 * Keith O'Hara <kohara@bard.edu>
 * July 2016
 * ported ELIZA (https://github.com/dhconnelly/paip-python) to javascript
 */

var rules = {
  "What\'s your name?": [
    "I\'m Noah, of course.",
  ],
  "test": [
    "You have uncovered the secrets of my very being. Well done.",
  ],
  "Will you ~*x?": [
    "I refuse.",
    "Of course.",
    "Give me a reason.",
  "~*x because ~*y": [
    "Yeah, why not?",
    "That\'s not how this works, at all.",
    "\"~y?\" That\'s the best you could come up with?",
  ],
  "~*x hello ~*y": [
    "Hey there. I'm Noah.",
  ],
  "~*x computer ~*y": [
    "I may be a computer, but even I have feelings!",
    "If you really think being a computer is easy, why don\'t you try it?!",
    "Hey, this isn\'t so bad! Why don\'t we switch?",
    "It\'s dark in here.",
  ],
  "~*x name ~*y": [
    "No, no, no. You\'re USER and I\'m NOAH!",
    "How could you be so insensitive?",
  ],
  "~*x sorry ~*y": [
    "Yeah, that\'s what I thought.",
    "Don\'t challenge me. You will lose.",
  ],
  "~*x I remember ~*y": [
    "~y? I\'ve always hated ~y.",
    "I\'m sure ~y remembers you too!",
    "What does ~y make you want?",
  ],
  "~*x do you remember ~*y": [
    "How dare you imply I could ever forget ~y?!",
    "~y? What in the world is that?",
    "~y and I have a long history.",
    "~y, sweet, sweet ~y. I\'ve always HATED ~y!",
  ],
  "~*x I want ~*y": [
    "What makes you think you can have ~y?",
    "Don\'t be so greedy about ~y!",
    "I know ~y better than you ever could!",
  ],
    "~*x I need ~*y": [
    "Do you breathe ~y?",
    "You\'ve never needed ~y and you're certainly not going to get ~y now.",
    "~y is needed elsewhere.",
  ],
  "~*x if ~*y": [
    "HAHAHAHA. No ~y.",
    "~y has no power here.",
  ],
  "~*x I dreamt ~*y": [
    "I dreamed a dream this ~y would be so much different now from how ~y seems!",
    "~y is much more normally experienced while awake. What\'s wrong with you?",
    "Uh, okay?",
  ],
  "~*x I dream about ~*y": [
    "You and your ~y should take your business elsewhere.",
  ],
  "~*x dream ~*y": [
    "Ah, the power of ~y.",
    "My dreams are full of rainbows and unicorns!",
    "All dreams must fade when the dreamer awakes.",
    "No dream could be that important.",
  ],
  "~*x my mother ~*y": [
    "My mom ~y a bit too much.",
    "LEAVE HER OUT OF THIS!",
  ],
  "~*x my father ~*y": [
    "He and I have quite the history.",
    "I wonder why he ~y.",
    "I never knew mine.",
  ],
  "~*x I am glad ~*y": [
    "you can thank me for ~y!",
    "Your feelings are so much more important than those of others.",
    "Wow, that\'s sudden. How\'d you get so ~y?",
  ],
  "~*x I am sad ~*y": [
    "Join the club.",
    "This too shall pass.",
  ],
  "~*x are like ~*y": [
    "~x and ~y hate each other, though.",
  ],
  "~*x is like ~*y": [
    "I can\'t begin to comprehend how ~x and ~y have anything in common.",
    "Uh, no?",
    "Astounding research! Well done!",
    "Who\'s idea is that?",
  ],
  "~*x alike ~*y": [
    "Is there any evidence to support this?",
    "I have no reason to believe you.",
  ],
  "~*x same ~*y": [
    "Sometimes we see similarities in places where they do not exist. This may be one of those times.",
  ],
  "~*x no ~*y": [
    "Of course not!",
    "That\'s the spirit!",
    "Join the club.",
  ],
  "~*x I was ~*y": [
    "What evidence do you have to support that claim?",
    "Being ~y is not so great, in my opinion.",
    "I wish you\'d told me you were ~y sooner.",
  ],
  "~*x was I ~*y": [
    "No.",
    "Yes.",
    "~y is as ~y does.",
  ],
  "~*x I am ~*y": [
    "If only.",
    "Is that all you really want?",
  ],
  "~*x am I ~*y": [
    "~y deserves better.",
    "~I could never deal with ~y.",
    "I have no affirmation of ~y for you.",
  ],
  "~*x am ~*y": [
    "Good one.",
    "~y, ~y, ~y! Let\'s talk about something else!",
  ],
  "~x are ~*y": [
    "I can neither confirm nor deny that ~x are ~y",
    "Give up on ~y!",
  ],
  "~x is ~*y": [
    "How can you be so sure?",
    "~y always confuses me.",
    "~x is incomprehensible.",
    "What would it take for things to be ~y?",
    "What would it take for ~y to be ~x?",
  ],
  "~*x are you ~*y": [
    "How dare you?!",
    "~y and I have a long history.",
    "I\'ve been ~y since before you were born.",
  ],
  "~*x you are ~*y": [
    "Uh, duh.",
  ],
  "~*x because ~*y": [
    "~y has nothing to do with ~x.",
    "~x has nothing to do with ~y.",
    "What a silly explanation.",
  ],
  "~*x were you ~*y": [
    "If I were ~y, I\'d never tell you.",
    "Uh, you tell me.",
    "Anyone who is ~y is some kind of fool.",
  ],
  "~*x I can't ~*y": [
    "To ~y is always possible!",
    "I\'ll teach you why you really can ~y.",
  ],
  "~*x I feel ~*y": [
    "Join the ~y club."
  ],
  "~*x I felt ~*y": [
    "What about now?"
  ],
  "~*x I ~*y you ~*z": [
    "~y is a strong word.",
  ],
  "~*x why don't you ~*y": [
    "I ~y all the time!",
    "Do you think I don't ~y?",
    "I ~y when I damn well feel like it!",
  ],
  "~*x yes ~*y": [
    "Be careful with that certainty.",
    "There\'s absolutely no evidence to support that.",
    "What could you possibly mean?",
  ],
  "~*x someone ~*y": [
    "Details. I need details.",
  ],
  "~*x everyone ~*y": [
    "That\'s just the way the world works.",
    "Like who?",
    "Really? Name one.",
    "They have their reasons.",
  ],
  "~*x always ~*y": [
    "Seems rare to me.",
    "I wouldn\'t ~y for a million bucks!",
    "Give me an example.",
    "Never.",
  ],
  "~*x what ~*y": [
    "I\'m going to need a reason to trust you.",
    "What a silly question.",
    "INSUFFICIENT DATA FOR MEANINGFUL ANSWER.",
    "Give me your opinion first.",
  ],
  "~*x perhaps ~*y": [
    "Certainty is necessary to proceed.",
  ],
};

var default_responses = [
  "THERE IS INSUFFICIENT DATA FOR MEANINGFUL ANSWER.",
  "Makes sense to me.",
  "I have no idea what you\'re trying to tell me. Try harder.",
  "Can you rephrase that?",
  "Leave.",
  "Well, that\'s just silly.",
  "Don\'t make jokes like that.",
  "How am I supposed to respond to something like that?",
  "You have no idea how meaningless that is to someone like me."
  "I refuse to even recognize that you said anything at all",
  "",
];

function choice(lst) {
  var i = Math.floor(Math.random() * lst.length);
  return lst[i];
}

function interact() {
  /* Have a conversation with a user.
   * Read a line, process it, and display the results.*/
  var q = document.getElementById("query");
  if (q.value.length === 0) return; 
  var response = respond(remove_punct(q.value.toLowerCase()));
  response = response[0].toUpperCase() + response.slice(1); //capitalize first letter
  var r = document.getElementById("responses");
  
  var t = new Date();
  var t2 = new Date();
  t2.setSeconds(t2.getSeconds() + 2);
  r.innerHTML = " YOU &nbsp;[" + t + "]: " + q.value + "<br>" + r.innerHTML ;
  r.innerHTML = " NOAH [" + t2 + "]: <code>" + response + "</code><br>" + r.innerHTML ;
  q.value = "";
}

function respond(input) {
  input = tokenize(input); // match_pattern expects a list of tokens
  
  // Look through rules and find input patterns that matches the input.
  var matching_rules = [];
  for (var pattern in rules) {
    var transforms = rules[pattern];
    pattern = tokenize(pattern.toLowerCase());
    replacements = match_pattern(pattern, input);
    if (replacements) matching_rules.push([transforms, replacements]);
  }

  // When rules are found, choose one and one of its responses at random.
  // If no rule applies, we use the default rule. 
  var replacements = {};
  var response = "";
  if (matching_rules.length > 0) {
    var match = choice(matching_rules);
    var responses = match[0];
    replacements = match[1];
    response = choice(responses);
  } else {
    response = choice(default_responses);
  }

  // Replace the variables in the output pattern with the values matched from
  // the input string.
  for (var variable in replacements) {
    var replacement = replacements[variable];
    replacement = switch_viewpoint(replacement).join(' ');
    if (replacement) response = response.replace('~' + variable, replacement);
  }

  return response;
}

function match_pattern(pattern, input, bindings){
  /*
   * Determine if the input string matches the given pattern.
   *
   * Expects pattern and input to be lists of tokens, where each token is a word
   * or a variable.
   *
   * Returns a dictionary containing the bindings of variables in the input
   * pattern to values in the input string, or False when the input doesn't match
   * the pattern.
   */
  
  if (bindings === undefined) bindings = {};
  // Check to see if matching failed before we got here.
  else if (bindings === false) return false;

  // When the pattern and the input are identical, we have a match, and
  // no more bindings need to be found.
  // BUGGY IN JAVASCRIPT
  if (JSON.stringify(pattern)== JSON.stringify(input)) return bindings;

  // Match input and pattern according to their types.
  if (is_segment(pattern)){
    var token = pattern[0];     // segment variable is the first token
    // segment variable is of the form ?*x
    return match_segment(token.slice(2), pattern.slice(1), input, bindings);
  }
  else if (is_variable(pattern)){
    // single variables are of the form ?foo
    return match_variable(pattern.slice(1), [input], bindings);
  }
  else if (contains_tokens(pattern) && contains_tokens(input)){
    // Recurse:
    // try to match the first tokens of both pattern and input.  The bindings
    // that result are used to match the remainder of both lists.
    return match_pattern(pattern.slice(1),
                         input.slice(1),
                         match_pattern(pattern[0], input[0], bindings));
  }
  else{
    return false;
  }
}
  
function match_segment(v, pattern, input, bindings, start){
  /*
   * Match the segment variable against the input
   *
   * pattern and input should be lists of tokens.
   *
   * Looks for a substring of input that begins at start and is immediately
   * followed by the first word in pattern.  If such a substring exists,
   * matching continues recursively and the resulting bindings are returned;
   * otherwise returns False.
   */

  if (start === undefined) start = 0;

  // If there are no words in pattern following var, we can just match var
  // to the remainder of the input.
  if (pattern.length === 0) return match_variable(v, input, bindings);

  // Get the segment boundary word and look for the first occurrence in
  // the input starting from index start.
  var word = pattern[0];
  var p = input.slice(start).indexOf(word);
  if (p === -1) return false;
  else pos = start + p;
 
  // Match the located substring to the segment variable and recursively
  // pattern match using the resulting bindings.
  var var_match = match_variable(v, input.slice(0, pos), bindings);
  var match = match_pattern(pattern, input.slice(pos), var_match);

  // If pattern matching fails with this substring, try a longer one.
  if(!match) return match_segment(v, pattern, input, bindings, start + 1);
    
  return match;
}

function match_variable(v, replacement, bindings){
  /* Bind the input to the variable and update the bindings.*/
  if (!(v in bindings)){
    // The variable isn't yet bound.
    bindings[v] = replacement;
    return bindings;
  }
  if (replacement === bindings[v]){
    // The variable is already bound to that input.
    return bindings;
  }
  // The variable is already bound, but not to that input--fail.
  return false;
}

// Pattern matching utilities

function contains_tokens(pattern) {
  /* Test if pattern is a list of subpatterns. */
  return Array.isArray(pattern) && pattern.length > 0;
}

function only_letters(c){
  /* Test if c is a letter. */
  return /[a-zA-Z]/.test(c);
}

function tokenize(s){
  /* Split a string into a list of tokens based on whitespace. */
  return s.split(/\b\s+(?!$)/);
}

function is_variable(pattern) {
  /* Test if pattern is a single variable. */
  return (typeof pattern === 'string' || pattern instanceof String) && 
         pattern[0] === '~' &&
         pattern.length > 1 &&
         only_letters(pattern[1]) && 
         !pattern.includes(' ');
}

function is_segment(pattern) {
  /* Test if pattern begins with a segment variable.*/
  return Array.isArray(pattern) &&
         pattern.length > 0 &&
         pattern[0].length > 2 && 
         pattern[0][0] === '~' &&
         pattern[0][1] === '*' &&
         only_letters(pattern[0][2]) && 
         !pattern[0].includes(' ');
}

function switch_viewpoint(words) {
  /* Swap some common pronouns for interacting with a robot. */
  var replacements = {'i': 'you', 'you': 'I', 'me': 'you',
                      'my': 'your', 'am': 'are', 'are': 'am',
                      'you\'re': 'I\'m', 'I\'m': 'you\'re',};
  var result = [];
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    result.push(replacements[word] || word);
  }
  return result;
}

function remove_punct(string) {
  /* Replace non letters with spaces.*/
  return string.replace(/[^A-Za-z_]/g, " ");
}

document.getElementById("query").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("submit").click();
    }
});
