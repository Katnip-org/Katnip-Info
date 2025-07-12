> – Ripped directly from Katnip repo –

- Format: 
- useName:opCode:type:inputName1,inputName2, ...
- types: 
  - hat (top of stack),
  - reporter (fits inside parameters),
  - c (envelops code),
  - stack (block that fits into stack),
  - cap (ends stack)
-  `{` `}` are used to denote options, seperated by ";". "..." denotes that other options are allowed to be put in
- () after an i.input, is used to denote a menu; meaning i.input takes in that menu as a part by default

## ⚙️ INTERNAL

<span class="motion-1"><strong>goto_menu: </strong></span><span class="motion-2">motion_goto_menu: </span><span class="motion-3">f.to `{`_random_;_mouse_;... `}`</span>\
<span class="motion-1"><strong>glideto_menu: </strong></span><span class="motion-2">motion_glideto_menu: </span><span class="motion-3">f.to `{`_random_;_mouse_;... `}`</span>\
<span class="motion-1"><strong>point_towards_menu: </strong></span><span class="motion-2">motion_pointtowards_menu: </span><span class="motion-3">f.towards `{`_random_;_mouse_;... `}`</span>\
<span class="looks-1"><strong>costume_menu: </strong></span><span class="looks-2">looks_costume: </span><span class="looks-3">f.costume `{`... `}`</span>\
<span class="looks-1"><strong>backdrop_menu: </strong></span><span class="looks-2">looks_backdrops: </span><span class="looks-3">f.backdrop `{`... `}`</span>\
<span class="sounds-1"><strong>sound_menu: </strong></span><span class="sounds-2">sound_sounds_menu: </span><span class="sounds-3">f.sound_menu `{`... `}`</span>\
<span class="control-1"><strong>clone_menu: </strong></span><span class="control-2">control_create_clone_of_menu: </span><span class="control-3">f.clone_option</span>\
<span class="sensing-1"><strong>touching_menu: </strong></span><span class="sensing-2">sensing_touchingobjectmenu: </span><span class="sensing-3">f.touchingobjectmenu</span>\
<span class="sensing-1"><strong>distance_menu: </strong></span><span class="sensing-2">sensing_distancetomenu: </span><span class="sensing-3">f.distancetomenu</span>\
<span class="sensing-1"><strong>key_menu: </strong></span><span class="sensing-2">sensing_keyoptions: </span><span class="sensing-3">f.key_option</span>\
<span class="sensing-1"><strong>sensingobj_menu: </strong></span><span class="sensing-2">sensing_of_object_menu: </span><span class="sensing-3">f.object</span>\
<span class="pen-1"><strong>pen_menu: </strong></span><span class="pen-2">pen_menu_colorParam: </span><span class="pen-3">f.colorParam</span>

## 💙 MOTION

<span class="motion-1"><strong>move: </strong></span><span class="motion-2">motion_movesteps: </span><span class="motion-3">i.steps</span>\
<span class="motion-1"><strong>turn: </strong></span><span class="motion-2">motion_turnright: </span><span class="motion-3">i.degrees</span>\
<span class="motion-1"><strong>gotoXY: </strong></span><span class="motion-2">motion_gotoxy: </span><span class="motion-3">i.x,i.y</span>\
<span class="motion-1"><strong>goto: </strong></span><span class="motion-2">motion_goto: </span><span class="motion-3">i.to(goto_menu)</span>\
<span class="motion-1"><strong>glideXY: </strong></span><span class="motion-2">motion_glidesecstoxy: </span><span class="motion-3">i.secs,i.x,i.y</span>\
<span class="motion-1"><strong>glideto: </strong></span><span class="motion-2">motion_glideto: </span><span class="motion-3">i.secs,i.to(glideto_menu)</span>\
<span class="motion-1"><strong>point: </strong></span><span class="motion-2">motion_pointindirection: </span><span class="motion-3">i.direction</span>\
<span class="motion-1"><strong>pointTo: </strong></span><span class="motion-2">motion_pointtowards: </span><span class="motion-3">i.towards(point_towards_menu)</span>\
<span class="motion-1"><strong>changeX: </strong></span><span class="motion-2">motion_changexby: </span><span class="motion-3">i.dx</span>\
<span class="motion-1"><strong>setX: </strong></span><span class="motion-2">motion_setx: </span><span class="motion-3">i.x</span>\
<span class="motion-1"><strong>changeY: </strong></span><span class="motion-2">motion_changeyby: </span><span class="motion-3">i.dy</span>\
<span class="motion-1"><strong>setY: </strong></span><span class="motion-2">motion_sety: </span><span class="motion-3">i.y</span>\
<span class="motion-1"><strong>edgeBounce: </strong></span><span class="motion-2">motion_ifonedgebounce: </span><span class="motion-3"></span>\
<span class="motion-1"><strong>rotationStyle: </strong></span><span class="motion-2">motion_setrotationstyle: </span><span class="motion-3">f.style `{`left-right;don't rotate;all around `}`</span>\
<span class="motion-1"><strong>xPos: </strong></span><span class="motion-2">motion_xposition: </span><span class="motion-3"></span>\
<span class="motion-1"><strong>yPos: </strong></span><span class="motion-2">motion_yposition: </span><span class="motion-3"></span>\
<span class="motion-1"><strong>direction: </strong></span><span class="motion-2">motion_direction: </span><span class="motion-3"></span>

## 💜 LOOKS

<span class="looks-1"><strong>timeSay: </strong></span><span class="looks-2">looks_sayforsecs: </span><span class="looks-3">i.message,i.secs</span>\
<span class="looks-1"><strong>say: </strong></span><span class="looks-2">looks_say: </span><span class="looks-3">i.message</span>\
<span class="looks-1"><strong>timeThink: </strong></span><span class="looks-2">looks_thinkforsecs: </span><span class="looks-3">i.message,i.secs</span>\
<span class="looks-1"><strong>think: </strong></span><span class="looks-2">looks_think: </span><span class="looks-3">i.message</span>\
<span class="looks-1"><strong>switchCostume: </strong></span><span class="looks-2">looks_switchcostumeto: </span><span class="looks-3">i.costume(costume_menu)</span>\
<span class="looks-1"><strong>nextCostume: </strong></span><span class="looks-2">looks_nextcostume: </span><span class="looks-3"></span>\
<span class="looks-1"><strong>switchBackdrop: </strong></span><span class="looks-2">looks_switchbackdropto: </span><span class="looks-3">i.costume(backdrop_menu)</span>\
<span class="looks-1"><strong>nextBackdrop: </strong></span><span class="looks-2">looks_nextbackdrop: </span><span class="looks-3"></span>\
<span class="looks-1"><strong>changeSize: </strong></span><span class="looks-2">looks_changesizeby: </span><span class="looks-3">i.change</span>\
<span class="looks-1"><strong>setSize: </strong></span><span class="looks-2">looks_setsizeto: </span><span class="looks-3">i.size</span>\
<span class="looks-1"><strong>changeFx: </strong></span><span class="looks-2">looks_changeeffectby: </span><span class="looks-3">f.effect `{`color;fisheye;whirl;... `}`,i.change</span>\
<span class="looks-1"><strong>setFx: </strong></span><span class="looks-2">looks_seteffectto: </span><span class="looks-3">f.effect `{`... `}`,i.value</span>\
<span class="looks-1"><strong>clearFx: </strong></span><span class="looks-2">looks_cleargraphiceffects: </span><span class="looks-3"></span>\
<span class="looks-1"><strong>show: </strong></span><span class="looks-2">looks_show: </span><span class="looks-3"></span>\
<span class="looks-1"><strong>hide: </strong></span><span class="looks-2">looks_hide: </span><span class="looks-3"></span>\
<span class="looks-1"><strong>goToLayer: </strong></span><span class="looks-2">looks_gotofrontback: </span><span class="looks-3">f.front_back `{`front;back `}`</span>\
<span class="looks-1"><strong>changeLayer: </strong></span><span class="looks-2">looks_goforwardbackwardlayers: </span><span class="looks-3">f.forward_backward `{`... `}`,num</span>\
<span class="looks-1"><strong>getCostume: </strong></span><span class="looks-2">looks_costumenumbername: </span><span class="looks-3">f.number_name `{`number;name `}`</span>\
<span class="looks-1"><strong>getBackdrop: </strong></span><span class="looks-2">looks_backdropnumbername: </span><span class="looks-3">f.number_name `{`... `}`</span>\
<span class="looks-1"><strong>size: </strong></span><span class="looks-2">looks_size: </span><span class="looks-3"></span>

## 💗 SOUND

<span class="sounds-1"><strong>play: </strong></span><span class="sounds-2">sound_play: </span><span class="sounds-3">i.sound_menu(sound_menu)</span>\
<span class="sounds-1"><strong>playWait: </strong></span><span class="sounds-2">sound_playuntildone: </span><span class="sounds-3">i.sound_menu(sound_menu)</span>\
<span class="sounds-1"><strong>stopSounds: </strong></span><span class="sounds-2">sound_stopallsounds: </span><span class="sounds-3"></span>\
<span class="sounds-1"><strong>changeSoundFx: </strong></span><span class="sounds-2">sound_changeeffectby: </span><span class="sounds-3">i.effect `{`pitch;pan left/right `}`,i.value</span>\
<span class="sounds-1"><strong>setSoundFx: </strong></span><span class="sounds-2">sound_seteffectto: </span><span class="sounds-3">i.effect `{`... `}`,i.value</span>\
<span class="sounds-1"><strong>clearSoundFx: </strong></span><span class="sounds-2">sound_cleareffects: </span><span class="sounds-3"></span>\
<span class="sounds-1"><strong>changeVolume: </strong></span><span class="sounds-2">sound_changevolumeby: </span><span class="sounds-3">i.volume</span>\
<span class="sounds-1"><strong>setVolume: </strong></span><span class="sounds-2">sound_setvolumeto: </span><span class="sounds-3">i.volume</span>\
<span class="sounds-1"><strong>volume: </strong></span><span class="sounds-2">sound_volume: </span><span class="sounds-3"></span>

## 💛 EVENTS

<span class="events-1"><strong>whenFlag: </strong></span><span class="events-2">event_whenflagclicked: </span><span class="events-3"></span>\
<span class="events-1"><strong>whenKey: </strong></span><span class="events-2">event_whenkeypressed: </span><span class="events-3">f.key_option `{`... `}`</span>\
<span class="events-1"><strong>whenSpriteClicked: </strong></span><span class="events-2">event_whenthisspriteclicked: </span><span class="events-3"></span>\
<span class="events-1"><strong>whenBackdropSwitch: </strong></span><span class="events-2">event_whenbackdropswitchesto: </span><span class="events-3">f.backdrop `{`... `}`</span>\
<span class="events-1"><strong>whenGreater: </strong></span><span class="events-2">event_whengreaterthan: </span><span class="events-3">f.whengreaterthanmenu `{`... `}`,i.value</span>\
<span class="events-1"><strong>whenBroadcast: </strong></span><span class="events-2">event_whenbroadcastreceived: </span><span class="events-3">f.broadcast_option `{`... `}`</span>\
<span class="events-1"><strong>whenTouching: </strong></span><span class="events-2">event_whentouchingobject: </span><span class="events-3">i.touchingobjectmenu(touching_menu)</span>\
<span class="events-1"><strong>sendBroadcast: </strong></span><span class="events-2">event_broadcast: </span><span class="events-3">i.broadcast_input</span>\
<span class="events-1"><strong>sendBroadcastWait: </strong></span><span class="events-2">event_broadcastandwait: </span><span class="events-3">i.broadcast_input</span>

## 🧡 CONTROL

<span class="control-1"><strong>wait: </strong></span><span class="control-2">control_wait: </span><span class="control-3">i.duration</span>\
<span class="control-1"><strong>repeat: </strong></span><span class="control-2">control_repeat: </span><span class="control-3">i.times,i.substack</span>\
<span class="control-1"><strong>forever: </strong></span><span class="control-2">control_forever: </span><span class="control-3">i.substack</span>\
<span class="control-1"><strong>if: </strong></span><span class="control-2">control_if: </span><span class="control-3">i.condition[bool],i.substack</span>\
<span class="control-1"><strong>ifElse: </strong></span><span class="control-2">control_if_else: </span><span class="control-3">i.condition[bool],i.substack,i.substack2</span>\
<span class="control-1"><strong>waitUntil: </strong></span><span class="control-2">control_wait_until: </span><span class="control-3">i.condition[bool]</span>\
<span class="control-1"><strong>repeatUntil: </strong></span><span class="control-2">control_repeat_until: </span><span class="control-3">i.condition[bool],i.substack</span>\
<span class="control-1"><strong>stop: </strong></span><span class="control-2">control_stop: </span><span class="control-3">f.stop_option `{`all;this script;other scripts in sprite `}`</span>\
<span class="control-1"><strong>whenCloneStart: </strong></span><span class="control-2">control_start_as_clone: </span><span class="control-3"></span>\
<span class="control-1"><strong>createClone: </strong></span><span class="control-2">control_create_clone_of: </span><span class="control-3">i.clone_option(clone_menu)</span>\
<span class="control-1"><strong>deleteClone: </strong></span><span class="control-2">control_delete_this_clone: </span><span class="control-3"></span>\
<span class="control-1"><strong>while: </strong></span><span class="control-2">control_while: </span><span class="control-3">i.condition,i.substack</span>\
<span class="control-1"><strong>for: </strong></span><span class="control-2">control_for_each: </span><span class="control-3">f.variable,i.value,i.substack</span>\
<span class="control-1"><strong>allAtOnce: </strong></span><span class="control-2">control_all_at_once: </span><span class="control-3">i.substack</span>\
<span class="control-1"><strong>counter: </strong></span><span class="control-2">control_get_counter: </span><span class="control-3"></span>\
<span class="control-1"><strong>clearCounter: </strong></span><span class="control-2">control_clear_counter: </span><span class="control-3"></span>\
<span class="control-1"><strong>incrCounter: </strong></span><span class="control-2">control_incr_counter: </span><span class="control-3"></span>

# 🟦 SENSING

<span class="sensing-1"><strong>touching: </strong></span><span class="sensing-2">sensing_touchingobject: </span><span class="sensing-3">i.touchingobjectmenu(touching_menu)</span>\
<span class="sensing-1"><strong>touchingClr: </strong></span><span class="sensing-2">sensing_touchingcolor: </span><span class="sensing-3">i.color</span>\
<span class="sensing-1"><strong>clrTouchingClr: </strong></span><span class="sensing-2">sensing_coloristouchingcolor: </span><span class="sensing-3">i.color,i.color2</span>\
<span class="sensing-1"><strong>distanceto: </strong></span><span class="sensing-2">sensing_distanceto: </span><span class="sensing-3">i.distancetomenu(distance_menu)</span>\
<span class="sensing-1"><strong>ask: </strong></span><span class="sensing-2">sensing_askandwait: </span><span class="sensing-3">i.question</span>\
<span class="sensing-1"><strong>answer: </strong></span><span class="sensing-2">sensing_answer: </span><span class="sensing-3"></span>\
<span class="sensing-1"><strong>keypressed: </strong></span><span class="sensing-2">sensing_keypressed: </span><span class="sensing-3">i.key_option(key_menu)</span>\
<span class="sensing-1"><strong>mouse: </strong></span><span class="sensing-2">sensing_mousedown: </span><span class="sensing-3"></span>\
<span class="sensing-1"><strong>mouseX: </strong></span><span class="sensing-2">sensing_mousex: </span><span class="sensing-3"></span>\
<span class="sensing-1"><strong>mouseY: </strong></span><span class="sensing-2">sensing_mousey: </span><span class="sensing-3"></span>\
<span class="sensing-1"><strong>setdragmode: </strong></span><span class="sensing-2">sensing_setdragmode: </span><span class="sensing-3">f.drag_mode `{`draggable;not draggable `}`</span>\
<span class="sensing-1"><strong>loudness: </strong></span><span class="sensing-2">sensing_loudness: </span><span class="sensing-3"></span>\
<span class="sensing-1"><strong>timer: </strong></span><span class="sensing-2">sensing_timer: </span><span class="sensing-3"></span>\
<span class="sensing-1"><strong>resetTime: </strong></span><span class="sensing-2">sensing_resettimer: </span><span class="sensing-3"></span>\
<span class="sensing-1"><strong>getAttribute: </strong></span><span class="sensing-2">sensing_of: </span><span class="sensing-3">f.property `{`... `}`,i.object(sensingobj_menu)</span>\
<span class="sensing-1"><strong>current: </strong></span><span class="sensing-2">sensing_current: </span><span class="sensing-3">f.currentmenu `{`... `}`</span>\
<span class="sensing-1"><strong>dayssince2000: </strong></span><span class="sensing-2">sensing_dayssince2000: </span><span class="sensing-3"></span>\
<span class="sensing-1"><strong>username: </strong></span><span class="sensing-2">sensing_username: </span><span class="sensing-3"></span>

## 🟩 OPERATORS

<span class="operators-1"><strong>add: </strong></span><span class="operators-2">operator_add: </span><span class="operators-3">i.num1,i.num2</span>\
<span class="operators-1"><strong>subtract: </strong></span><span class="operators-2">operator_subtract: </span><span class="operators-3">i.num1,i.num2</span>\
<span class="operators-1"><strong>multiply: </strong></span><span class="operators-2">operator_multiply: </span><span class="operators-3">i.num1,i.num2</span>\
<span class="operators-1"><strong>divide: </strong></span><span class="operators-2">operator_divide: </span><span class="operators-3">i.num1,i.num2</span>\
<span class="operators-1"><strong>random: </strong></span><span class="operators-2">operator_random: </span><span class="operators-3">i.from,i.to</span>\
<span class="operators-1"><strong>lt: </strong></span><span class="operators-2">operator_lt: </span><span class="operators-3">i.operand1,i.operand2</span>\
<span class="operators-1"><strong>equals: </strong></span><span class="operators-2">operator_equals: </span><span class="operators-3">i.operand1,i.operand2</span>\
<span class="operators-1"><strong>gt: </strong></span><span class="operators-2">operator_gt: </span><span class="operators-3">i.operand1,i.operand2</span>\
<span class="operators-1"><strong>and: </strong></span><span class="operators-2">operator_and: </span><span class="operators-3">i.operand1[bool],i.operand2[bool]</span>\
<span class="operators-1"><strong>or: </strong></span><span class="operators-2">operator_or: </span><span class="operators-3">i.operand1[bool],i.operand2[bool]</span>\
<span class="operators-1"><strong>not: </strong></span><span class="operators-2">operator_not: </span><span class="operators-3">i.operand[bool]</span>\
<span class="operators-1"><strong>join: </strong></span><span class="operators-2">operator_join: </span><span class="operators-3">i.string1,i.string2</span>\
<span class="operators-1"><strong>getLetter: </strong></span><span class="operators-2">operator_letter_of: </span><span class="operators-3">i.letter,i.string</span>\
<span class="operators-1"><strong>length: </strong></span><span class="operators-2">operator_length: </span><span class="operators-3">i.string</span>\
<span class="operators-1"><strong>contains: </strong></span><span class="operators-2">operator_contains: </span><span class="operators-3">i.string1,i.string2</span>\
<span class="operators-1"><strong>mod: </strong></span><span class="operators-2">operator_mod: </span><span class="operators-3">i.num1,i.num2</span>\
<span class="operators-1"><strong>round: </strong></span><span class="operators-2">operator_round: </span><span class="operators-3">i.num</span>\
<span class="operators-1"><strong>mathop: </strong></span><span class="operators-2">operator_mathop: </span><span class="operators-3">f.operator `{`... `}`,i.num</span>

## 🟧 VARIABLES

<span class="variables-1"><strong>varset: </strong></span><span class="variables-2">data_setvariableto: </span><span class="variables-3">f.variable `{`... `}`,i.value</span>\
<span class="variables-1"><strong>varchange: </strong></span><span class="variables-2">data_changevariableby: </span><span class="variables-3">f.variable `{`... `}`,i.value</span>\
<span class="variables-1"><strong>varshow: </strong></span><span class="variables-2">data_showvariable: </span><span class="variables-3">f.variable `{`... `}`</span>\
<span class="variables-1"><strong>varhide: </strong></span><span class="variables-2">data_hidevariable: </span><span class="variables-3">f.variable `{`... `}`</span>

## 🟧 LISTS

<span class="lists-1"><strong>listAdd: </strong></span><span class="lists-2">data_addtolist: </span><span class="lists-3">f.list,i.item</span>\
<span class="lists-1"><strong>listDelete: </strong></span><span class="lists-2">data_deleteoflist: </span><span class="lists-3">f.list,i.index</span>\
<span class="lists-1"><strong>listDeleteAll: </strong></span><span class="lists-2">data_deletealloflist: </span><span class="lists-3">f.list</span>\
<span class="lists-1"><strong>listInsert: </strong></span><span class="lists-2">data_insertatlist: </span><span class="lists-3">f.list,i.index,i.item</span>\
<span class="lists-1"><strong>listReplace: </strong></span><span class="lists-2">data_replaceitemoflist: </span><span class="lists-3">f.list,i.index,i.item</span>\
<span class="lists-1"><strong>getItem: </strong></span><span class="lists-2">data_itemoflist: </span><span class="lists-3">f.list,i.index</span>\
<span class="lists-1"><strong>getItemNum: </strong></span><span class="lists-2">data_itemnumoflist: </span><span class="lists-3">f.list,i.item</span>\
<span class="lists-1"><strong>listLength: </strong></span><span class="lists-2">data_lengthoflist: </span><span class="lists-3">f.list</span>\
<span class="lists-1"><strong>listContains: </strong></span><span class="lists-2">data_listcontainsitem: </span><span class="lists-3">f.list,i.item</span>\
<span class="lists-1"><strong>listShow: </strong></span><span class="lists-2">data_showlist: </span><span class="lists-3">f.list</span>\
<span class="lists-1"><strong>listHide: </strong></span><span class="lists-2">data_hidelist: </span><span class="lists-3">f.list</span>

## 🟥 MY BLOCKS

<span class="custom-1"><strong>funcargbool: </strong></span><span class="custom-2">argument_reporter_boolean: </span><span class="custom-3">f.value</span>\
<span class="custom-1"><strong>funcargexp: </strong></span><span class="custom-2">argument_reporter_string_number: </span><span class="custom-3">f.value</span>

## 🖊️ PEN

<span class="pen-1"><strong>penClear: </strong></span><span class="pen-2">pen_clear: </span><span class="pen-3"></span>\
<span class="pen-1"><strong>stamp: </strong></span><span class="pen-2">pen_stamp: </span><span class="pen-3"></span>\
<span class="pen-1"><strong>penDown: </strong></span><span class="pen-2">pen_penDown: </span><span class="pen-3"></span>\
<span class="pen-1"><strong>penUp: </strong></span><span class="pen-2">pen_penUp: </span><span class="pen-3"></span>\
<span class="pen-1"><strong>hexPen: </strong></span><span class="pen-2">pen_setPenColorToColor: </span><span class="pen-3">i.color</span>\
<span class="pen-1"><strong>changePen: </strong></span><span class="pen-2">pen_changePenColorParamBy: </span><span class="pen-3">i.color_param `{`... `}`,i.value</span>\
<span class="pen-1"><strong>setPen: </strong></span><span class="pen-2">pen_setPenColorParamTo: </span><span class="pen-3">i.color_param(pen_menu),i.value</span>\
<span class="pen-1"><strong>changePenSize: </strong></span><span class="pen-2">pen_changePenSizeBy: </span><span class="pen-3">i.size</span>\
<span class="pen-1"><strong>setPenSize: </strong></span><span class="pen-2">pen_setPenSizeTo: </span><span class="pen-3">i.size</span>\
<span class="pen-1"><strong>setPenShade: </strong></span><span class="pen-2">pen_setPenShadeToNumber: </span><span class="pen-3">i.shade</span>\
<span class="pen-1"><strong>changePenShade: </strong></span><span class="pen-2">pen_changePenShadeBy: </span><span class="pen-3">i.shade</span>