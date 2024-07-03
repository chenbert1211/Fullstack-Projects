{"filter":false,"title":"todos.js","tooltip":"/PairExercise.TodoList.V2222/client/store/todos.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":44,"column":23},"end":{"row":44,"column":24},"action":"remove","lines":["o"],"id":55},{"start":{"row":44,"column":22},"end":{"row":44,"column":23},"action":"remove","lines":["d"]},{"start":{"row":44,"column":21},"end":{"row":44,"column":22},"action":"remove","lines":["o"]},{"start":{"row":44,"column":20},"end":{"row":44,"column":21},"action":"remove","lines":["T"]},{"start":{"row":44,"column":19},"end":{"row":44,"column":20},"action":"remove","lines":["e"]},{"start":{"row":44,"column":18},"end":{"row":44,"column":19},"action":"remove","lines":["t"]},{"start":{"row":44,"column":17},"end":{"row":44,"column":18},"action":"remove","lines":["a"]},{"start":{"row":44,"column":16},"end":{"row":44,"column":17},"action":"remove","lines":["e"]},{"start":{"row":44,"column":15},"end":{"row":44,"column":16},"action":"remove","lines":["r"]},{"start":{"row":44,"column":14},"end":{"row":44,"column":15},"action":"remove","lines":["c"]}],[{"start":{"row":44,"column":14},"end":{"row":44,"column":15},"action":"insert","lines":["d"],"id":56},{"start":{"row":44,"column":15},"end":{"row":44,"column":16},"action":"insert","lines":["e"]},{"start":{"row":44,"column":16},"end":{"row":44,"column":17},"action":"insert","lines":["l"]},{"start":{"row":44,"column":17},"end":{"row":44,"column":18},"action":"insert","lines":["e"]},{"start":{"row":44,"column":18},"end":{"row":44,"column":19},"action":"insert","lines":["t"]},{"start":{"row":44,"column":19},"end":{"row":44,"column":20},"action":"insert","lines":["e"]}],[{"start":{"row":44,"column":13},"end":{"row":44,"column":20},"action":"remove","lines":["_delete"],"id":57},{"start":{"row":44,"column":13},"end":{"row":44,"column":24},"action":"insert","lines":["_deleteTodo"]}],[{"start":{"row":43,"column":18},"end":{"row":43,"column":25},"action":"remove","lines":["created"],"id":58},{"start":{"row":43,"column":17},"end":{"row":43,"column":18},"action":"remove","lines":[" "]},{"start":{"row":43,"column":16},"end":{"row":43,"column":17},"action":"remove","lines":[":"]}],[{"start":{"row":44,"column":25},"end":{"row":44,"column":32},"action":"remove","lines":["created"],"id":59},{"start":{"row":44,"column":25},"end":{"row":44,"column":26},"action":"insert","lines":["d"]},{"start":{"row":44,"column":26},"end":{"row":44,"column":27},"action":"insert","lines":["a"]},{"start":{"row":44,"column":27},"end":{"row":44,"column":28},"action":"insert","lines":["t"]},{"start":{"row":44,"column":28},"end":{"row":44,"column":29},"action":"insert","lines":["a"]}],[{"start":{"row":43,"column":49},"end":{"row":43,"column":50},"action":"insert","lines":["$"],"id":60},{"start":{"row":43,"column":50},"end":{"row":43,"column":51},"action":"insert","lines":["{"]},{"start":{"row":43,"column":51},"end":{"row":43,"column":52},"action":"insert","lines":["}"]}],[{"start":{"row":43,"column":51},"end":{"row":43,"column":52},"action":"insert","lines":["i"],"id":61},{"start":{"row":43,"column":52},"end":{"row":43,"column":53},"action":"insert","lines":["d"]}],[{"start":{"row":43,"column":49},"end":{"row":43,"column":50},"action":"remove","lines":["$"],"id":62}],[{"start":{"row":43,"column":49},"end":{"row":43,"column":50},"action":"insert","lines":["$"],"id":63}],[{"start":{"row":43,"column":54},"end":{"row":43,"column":55},"action":"remove","lines":["'"],"id":64}],[{"start":{"row":43,"column":54},"end":{"row":43,"column":55},"action":"insert","lines":["`"],"id":65}],[{"start":{"row":43,"column":38},"end":{"row":43,"column":39},"action":"remove","lines":["'"],"id":66}],[{"start":{"row":43,"column":38},"end":{"row":43,"column":39},"action":"insert","lines":["`"],"id":67}],[{"start":{"row":43,"column":49},"end":{"row":43,"column":50},"action":"insert","lines":["/"],"id":68}],[{"start":{"row":43,"column":33},"end":{"row":43,"column":37},"action":"remove","lines":["post"],"id":69},{"start":{"row":43,"column":33},"end":{"row":43,"column":34},"action":"insert","lines":["d"]},{"start":{"row":43,"column":34},"end":{"row":43,"column":35},"action":"insert","lines":["e"]},{"start":{"row":43,"column":35},"end":{"row":43,"column":36},"action":"insert","lines":["l"]},{"start":{"row":43,"column":36},"end":{"row":43,"column":37},"action":"insert","lines":["e"]},{"start":{"row":43,"column":37},"end":{"row":43,"column":38},"action":"insert","lines":["t"]},{"start":{"row":43,"column":38},"end":{"row":43,"column":39},"action":"insert","lines":["e"]}],[{"start":{"row":41,"column":0},"end":{"row":41,"column":3},"action":"insert","lines":["// "],"id":70},{"start":{"row":42,"column":0},"end":{"row":42,"column":3},"action":"insert","lines":["// "]},{"start":{"row":43,"column":0},"end":{"row":43,"column":3},"action":"insert","lines":["// "]},{"start":{"row":44,"column":0},"end":{"row":44,"column":3},"action":"insert","lines":["// "]},{"start":{"row":46,"column":0},"end":{"row":46,"column":3},"action":"insert","lines":["// "]},{"start":{"row":47,"column":0},"end":{"row":47,"column":3},"action":"insert","lines":["// "]}],[{"start":{"row":47,"column":5},"end":{"row":48,"column":0},"action":"insert","lines":["",""],"id":71}],[{"start":{"row":48,"column":0},"end":{"row":54,"column":2},"action":"insert","lines":["export const createTodo = (todo, history) => {","  return async (dispatch) => {","    const { data: created } = await axios.post('/api/todos', todo);","    dispatch(_createTodo(created));","    history.push('/');","  };","};"],"id":72}],[{"start":{"row":48,"column":13},"end":{"row":48,"column":23},"action":"remove","lines":["createTodo"],"id":73},{"start":{"row":48,"column":13},"end":{"row":48,"column":14},"action":"insert","lines":["d"]},{"start":{"row":48,"column":14},"end":{"row":48,"column":15},"action":"insert","lines":["e"]},{"start":{"row":48,"column":15},"end":{"row":48,"column":16},"action":"insert","lines":["l"]},{"start":{"row":48,"column":16},"end":{"row":48,"column":17},"action":"insert","lines":["e"]},{"start":{"row":48,"column":17},"end":{"row":48,"column":18},"action":"insert","lines":["t"]},{"start":{"row":48,"column":18},"end":{"row":48,"column":19},"action":"insert","lines":["e"]},{"start":{"row":48,"column":19},"end":{"row":48,"column":20},"action":"insert","lines":["T"]},{"start":{"row":48,"column":20},"end":{"row":48,"column":21},"action":"insert","lines":["o"]},{"start":{"row":48,"column":21},"end":{"row":48,"column":22},"action":"insert","lines":["d"]}],[{"start":{"row":48,"column":22},"end":{"row":48,"column":23},"action":"insert","lines":["o"],"id":74}],[{"start":{"row":50,"column":42},"end":{"row":50,"column":46},"action":"remove","lines":["post"],"id":75},{"start":{"row":50,"column":42},"end":{"row":50,"column":43},"action":"insert","lines":["d"]},{"start":{"row":50,"column":43},"end":{"row":50,"column":44},"action":"insert","lines":["e"]},{"start":{"row":50,"column":44},"end":{"row":50,"column":45},"action":"insert","lines":["l"]},{"start":{"row":50,"column":45},"end":{"row":50,"column":46},"action":"insert","lines":["e"]},{"start":{"row":50,"column":46},"end":{"row":50,"column":47},"action":"insert","lines":["t"]},{"start":{"row":50,"column":47},"end":{"row":50,"column":48},"action":"insert","lines":["e"]}],[{"start":{"row":50,"column":18},"end":{"row":50,"column":25},"action":"remove","lines":["created"],"id":76},{"start":{"row":50,"column":18},"end":{"row":50,"column":19},"action":"insert","lines":["d"]},{"start":{"row":50,"column":19},"end":{"row":50,"column":20},"action":"insert","lines":["e"]},{"start":{"row":50,"column":20},"end":{"row":50,"column":21},"action":"insert","lines":["l"]},{"start":{"row":50,"column":21},"end":{"row":50,"column":22},"action":"insert","lines":["t"]},{"start":{"row":50,"column":22},"end":{"row":50,"column":23},"action":"insert","lines":["e"]},{"start":{"row":50,"column":23},"end":{"row":50,"column":24},"action":"insert","lines":["d"]}],[{"start":{"row":50,"column":23},"end":{"row":50,"column":24},"action":"remove","lines":["d"],"id":77},{"start":{"row":50,"column":22},"end":{"row":50,"column":23},"action":"remove","lines":["e"]},{"start":{"row":50,"column":21},"end":{"row":50,"column":22},"action":"remove","lines":["t"]},{"start":{"row":50,"column":20},"end":{"row":50,"column":21},"action":"remove","lines":["l"]}],[{"start":{"row":50,"column":20},"end":{"row":50,"column":21},"action":"insert","lines":["l"],"id":78},{"start":{"row":50,"column":21},"end":{"row":50,"column":22},"action":"insert","lines":["e"]},{"start":{"row":50,"column":22},"end":{"row":50,"column":23},"action":"insert","lines":["t"]},{"start":{"row":50,"column":23},"end":{"row":50,"column":24},"action":"insert","lines":["e"]},{"start":{"row":50,"column":24},"end":{"row":50,"column":25},"action":"insert","lines":["d"]}],[{"start":{"row":51,"column":25},"end":{"row":51,"column":32},"action":"remove","lines":["created"],"id":79},{"start":{"row":51,"column":25},"end":{"row":51,"column":26},"action":"insert","lines":["d"]},{"start":{"row":51,"column":26},"end":{"row":51,"column":27},"action":"insert","lines":["e"]},{"start":{"row":51,"column":27},"end":{"row":51,"column":28},"action":"insert","lines":["l"]}],[{"start":{"row":51,"column":27},"end":{"row":51,"column":28},"action":"remove","lines":["l"],"id":80}],[{"start":{"row":51,"column":27},"end":{"row":51,"column":28},"action":"insert","lines":["l"],"id":81},{"start":{"row":51,"column":28},"end":{"row":51,"column":29},"action":"insert","lines":["t"]},{"start":{"row":51,"column":29},"end":{"row":51,"column":30},"action":"insert","lines":["e"]},{"start":{"row":51,"column":30},"end":{"row":51,"column":31},"action":"insert","lines":["d"]}],[{"start":{"row":51,"column":30},"end":{"row":51,"column":31},"action":"remove","lines":["d"],"id":82},{"start":{"row":51,"column":29},"end":{"row":51,"column":30},"action":"remove","lines":["e"]},{"start":{"row":51,"column":28},"end":{"row":51,"column":29},"action":"remove","lines":["t"]}],[{"start":{"row":51,"column":28},"end":{"row":51,"column":29},"action":"insert","lines":["e"],"id":83},{"start":{"row":51,"column":29},"end":{"row":51,"column":30},"action":"insert","lines":["t"]},{"start":{"row":51,"column":30},"end":{"row":51,"column":31},"action":"insert","lines":["e"]},{"start":{"row":51,"column":31},"end":{"row":51,"column":32},"action":"insert","lines":["d"]}],[{"start":{"row":50,"column":61},"end":{"row":50,"column":67},"action":"remove","lines":[", todo"],"id":84}],[{"start":{"row":50,"column":60},"end":{"row":50,"column":61},"action":"remove","lines":["'"],"id":85}],[{"start":{"row":50,"column":60},"end":{"row":50,"column":61},"action":"insert","lines":["`"],"id":86}],[{"start":{"row":50,"column":49},"end":{"row":50,"column":50},"action":"remove","lines":["'"],"id":87}],[{"start":{"row":50,"column":49},"end":{"row":50,"column":50},"action":"insert","lines":["`"],"id":88}],[{"start":{"row":50,"column":60},"end":{"row":50,"column":61},"action":"insert","lines":["/"],"id":89},{"start":{"row":50,"column":61},"end":{"row":50,"column":62},"action":"insert","lines":["$"]},{"start":{"row":50,"column":62},"end":{"row":50,"column":63},"action":"insert","lines":["{"]},{"start":{"row":50,"column":63},"end":{"row":50,"column":64},"action":"insert","lines":["}"]}],[{"start":{"row":50,"column":63},"end":{"row":50,"column":64},"action":"insert","lines":["i"],"id":90},{"start":{"row":50,"column":64},"end":{"row":50,"column":65},"action":"insert","lines":["d"]}],[{"start":{"row":48,"column":27},"end":{"row":48,"column":31},"action":"remove","lines":["todo"],"id":91},{"start":{"row":48,"column":27},"end":{"row":48,"column":28},"action":"insert","lines":["i"]},{"start":{"row":48,"column":28},"end":{"row":48,"column":29},"action":"insert","lines":["d"]}],[{"start":{"row":36,"column":15},"end":{"row":36,"column":20},"action":"remove","lines":["reate"],"id":96},{"start":{"row":36,"column":14},"end":{"row":36,"column":15},"action":"remove","lines":["c"]}],[{"start":{"row":36,"column":14},"end":{"row":36,"column":15},"action":"insert","lines":["d"],"id":97},{"start":{"row":36,"column":15},"end":{"row":36,"column":16},"action":"insert","lines":["e"]},{"start":{"row":36,"column":16},"end":{"row":36,"column":17},"action":"insert","lines":["l"]},{"start":{"row":36,"column":17},"end":{"row":36,"column":18},"action":"insert","lines":["e"]},{"start":{"row":36,"column":18},"end":{"row":36,"column":19},"action":"insert","lines":["t"]},{"start":{"row":36,"column":19},"end":{"row":36,"column":20},"action":"insert","lines":["e"]}],[{"start":{"row":36,"column":25},"end":{"row":36,"column":32},"action":"remove","lines":["created"],"id":98},{"start":{"row":36,"column":25},"end":{"row":36,"column":26},"action":"insert","lines":["d"]},{"start":{"row":36,"column":26},"end":{"row":36,"column":27},"action":"insert","lines":["e"]},{"start":{"row":36,"column":27},"end":{"row":36,"column":28},"action":"insert","lines":["l"]},{"start":{"row":36,"column":28},"end":{"row":36,"column":29},"action":"insert","lines":["e"]},{"start":{"row":36,"column":29},"end":{"row":36,"column":30},"action":"insert","lines":["t"]},{"start":{"row":36,"column":30},"end":{"row":36,"column":31},"action":"insert","lines":["e"]},{"start":{"row":36,"column":31},"end":{"row":36,"column":32},"action":"insert","lines":["d"]}],[{"start":{"row":35,"column":18},"end":{"row":35,"column":25},"action":"remove","lines":["created"],"id":99},{"start":{"row":35,"column":18},"end":{"row":35,"column":25},"action":"insert","lines":["deleted"]}],[{"start":{"row":52,"column":4},"end":{"row":52,"column":7},"action":"insert","lines":["// "],"id":100}],[{"start":{"row":51,"column":14},"end":{"row":51,"column":20},"action":"remove","lines":["create"],"id":101},{"start":{"row":51,"column":14},"end":{"row":51,"column":15},"action":"insert","lines":["d"]},{"start":{"row":51,"column":15},"end":{"row":51,"column":16},"action":"insert","lines":["e"]},{"start":{"row":51,"column":16},"end":{"row":51,"column":17},"action":"insert","lines":["l"]},{"start":{"row":51,"column":17},"end":{"row":51,"column":18},"action":"insert","lines":["e"]},{"start":{"row":51,"column":18},"end":{"row":51,"column":19},"action":"insert","lines":["t"]},{"start":{"row":51,"column":19},"end":{"row":51,"column":20},"action":"insert","lines":["e"]}],[{"start":{"row":47,"column":5},"end":{"row":48,"column":0},"action":"insert","lines":["",""],"id":102},{"start":{"row":48,"column":0},"end":{"row":49,"column":0},"action":"insert","lines":["",""]},{"start":{"row":49,"column":0},"end":{"row":50,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":55,"column":4},"end":{"row":55,"column":7},"action":"remove","lines":["// "],"id":104}],[{"start":{"row":48,"column":0},"end":{"row":49,"column":0},"action":"remove","lines":["",""],"id":105},{"start":{"row":47,"column":5},"end":{"row":48,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":49,"column":44},"end":{"row":50,"column":0},"action":"insert","lines":["",""],"id":106},{"start":{"row":50,"column":0},"end":{"row":50,"column":2},"action":"insert","lines":["  "]},{"start":{"row":50,"column":2},"end":{"row":50,"column":3},"action":"insert","lines":["c"]}],[{"start":{"row":50,"column":3},"end":{"row":50,"column":4},"action":"insert","lines":["o"],"id":107},{"start":{"row":50,"column":4},"end":{"row":50,"column":5},"action":"insert","lines":["n"]},{"start":{"row":50,"column":5},"end":{"row":50,"column":6},"action":"insert","lines":["s"]},{"start":{"row":50,"column":6},"end":{"row":50,"column":7},"action":"insert","lines":["o"]},{"start":{"row":50,"column":7},"end":{"row":50,"column":8},"action":"insert","lines":["l"]},{"start":{"row":50,"column":8},"end":{"row":50,"column":9},"action":"insert","lines":["e"]},{"start":{"row":50,"column":9},"end":{"row":50,"column":10},"action":"insert","lines":["."]},{"start":{"row":50,"column":10},"end":{"row":50,"column":11},"action":"insert","lines":["l"]},{"start":{"row":50,"column":11},"end":{"row":50,"column":12},"action":"insert","lines":["o"]},{"start":{"row":50,"column":12},"end":{"row":50,"column":13},"action":"insert","lines":["g"]}],[{"start":{"row":50,"column":13},"end":{"row":50,"column":15},"action":"insert","lines":["()"],"id":108}],[{"start":{"row":50,"column":14},"end":{"row":50,"column":15},"action":"insert","lines":["d"],"id":109}],[{"start":{"row":50,"column":14},"end":{"row":50,"column":15},"action":"remove","lines":["d"],"id":110}],[{"start":{"row":50,"column":14},"end":{"row":50,"column":15},"action":"insert","lines":["i"],"id":111},{"start":{"row":50,"column":15},"end":{"row":50,"column":16},"action":"insert","lines":["d"]}],[{"start":{"row":37,"column":4},"end":{"row":37,"column":7},"action":"insert","lines":["// "],"id":112}],[{"start":{"row":54,"column":4},"end":{"row":54,"column":7},"action":"insert","lines":["// "],"id":113}],[{"start":{"row":49,"column":31},"end":{"row":49,"column":38},"action":"remove","lines":["history"],"id":114},{"start":{"row":49,"column":30},"end":{"row":49,"column":31},"action":"remove","lines":[" "]},{"start":{"row":49,"column":29},"end":{"row":49,"column":30},"action":"remove","lines":[","]}],[{"start":{"row":54,"column":4},"end":{"row":54,"column":7},"action":"remove","lines":["// "],"id":115}],[{"start":{"row":49,"column":29},"end":{"row":49,"column":30},"action":"insert","lines":[","],"id":116}],[{"start":{"row":49,"column":30},"end":{"row":49,"column":31},"action":"insert","lines":[" "],"id":117},{"start":{"row":49,"column":31},"end":{"row":49,"column":32},"action":"insert","lines":["h"]},{"start":{"row":49,"column":32},"end":{"row":49,"column":33},"action":"insert","lines":["i"]},{"start":{"row":49,"column":33},"end":{"row":49,"column":34},"action":"insert","lines":["s"]},{"start":{"row":49,"column":34},"end":{"row":49,"column":35},"action":"insert","lines":["t"]},{"start":{"row":49,"column":35},"end":{"row":49,"column":36},"action":"insert","lines":["o"]},{"start":{"row":49,"column":36},"end":{"row":49,"column":37},"action":"insert","lines":["r"]},{"start":{"row":49,"column":37},"end":{"row":49,"column":38},"action":"insert","lines":["y"]}],[{"start":{"row":37,"column":4},"end":{"row":37,"column":7},"action":"remove","lines":["// "],"id":118}],[{"start":{"row":35,"column":18},"end":{"row":35,"column":25},"action":"remove","lines":["deleted"],"id":119},{"start":{"row":35,"column":18},"end":{"row":35,"column":19},"action":"insert","lines":["t"]},{"start":{"row":35,"column":19},"end":{"row":35,"column":20},"action":"insert","lines":["o"]}],[{"start":{"row":35,"column":20},"end":{"row":35,"column":21},"action":"insert","lines":["d"],"id":120},{"start":{"row":35,"column":21},"end":{"row":35,"column":22},"action":"insert","lines":["o"]}],[{"start":{"row":36,"column":25},"end":{"row":36,"column":32},"action":"remove","lines":["deleted"],"id":121},{"start":{"row":36,"column":25},"end":{"row":36,"column":26},"action":"insert","lines":["t"]},{"start":{"row":36,"column":26},"end":{"row":36,"column":27},"action":"insert","lines":["o"]},{"start":{"row":36,"column":27},"end":{"row":36,"column":28},"action":"insert","lines":["d"]},{"start":{"row":36,"column":28},"end":{"row":36,"column":29},"action":"insert","lines":["o"]}],[{"start":{"row":36,"column":14},"end":{"row":36,"column":24},"action":"remove","lines":["deleteTodo"],"id":122},{"start":{"row":36,"column":14},"end":{"row":36,"column":15},"action":"insert","lines":["c"]},{"start":{"row":36,"column":15},"end":{"row":36,"column":16},"action":"insert","lines":["r"]},{"start":{"row":36,"column":16},"end":{"row":36,"column":17},"action":"insert","lines":["e"]},{"start":{"row":36,"column":17},"end":{"row":36,"column":18},"action":"insert","lines":["a"]},{"start":{"row":36,"column":18},"end":{"row":36,"column":19},"action":"insert","lines":["t"]},{"start":{"row":36,"column":19},"end":{"row":36,"column":20},"action":"insert","lines":["e"]}],[{"start":{"row":36,"column":13},"end":{"row":36,"column":20},"action":"remove","lines":["_create"],"id":123},{"start":{"row":36,"column":13},"end":{"row":36,"column":24},"action":"insert","lines":["_createTodo"]}],[{"start":{"row":35,"column":18},"end":{"row":35,"column":22},"action":"remove","lines":["todo"],"id":124},{"start":{"row":35,"column":18},"end":{"row":35,"column":19},"action":"insert","lines":["c"]},{"start":{"row":35,"column":19},"end":{"row":35,"column":20},"action":"insert","lines":["r"]},{"start":{"row":35,"column":20},"end":{"row":35,"column":21},"action":"insert","lines":["e"]},{"start":{"row":35,"column":21},"end":{"row":35,"column":22},"action":"insert","lines":["a"]},{"start":{"row":35,"column":22},"end":{"row":35,"column":23},"action":"insert","lines":["t"]},{"start":{"row":35,"column":23},"end":{"row":35,"column":24},"action":"insert","lines":["e"]},{"start":{"row":35,"column":24},"end":{"row":35,"column":25},"action":"insert","lines":["d"]}],[{"start":{"row":36,"column":25},"end":{"row":36,"column":29},"action":"remove","lines":["todo"],"id":125},{"start":{"row":36,"column":25},"end":{"row":36,"column":26},"action":"insert","lines":["c"]},{"start":{"row":36,"column":26},"end":{"row":36,"column":27},"action":"insert","lines":["r"]},{"start":{"row":36,"column":27},"end":{"row":36,"column":28},"action":"insert","lines":["e"]},{"start":{"row":36,"column":28},"end":{"row":36,"column":29},"action":"insert","lines":["a"]},{"start":{"row":36,"column":29},"end":{"row":36,"column":30},"action":"insert","lines":["t"]},{"start":{"row":36,"column":30},"end":{"row":36,"column":31},"action":"insert","lines":["e"]},{"start":{"row":36,"column":31},"end":{"row":36,"column":32},"action":"insert","lines":["d"]}],[{"start":{"row":52,"column":18},"end":{"row":52,"column":25},"action":"remove","lines":["deleted"],"id":126},{"start":{"row":52,"column":18},"end":{"row":52,"column":19},"action":"insert","lines":["t"]},{"start":{"row":52,"column":19},"end":{"row":52,"column":20},"action":"insert","lines":["o"]},{"start":{"row":52,"column":20},"end":{"row":52,"column":21},"action":"insert","lines":["d"]},{"start":{"row":52,"column":21},"end":{"row":52,"column":22},"action":"insert","lines":["o"]}],[{"start":{"row":53,"column":25},"end":{"row":53,"column":32},"action":"remove","lines":["deleted"],"id":127},{"start":{"row":53,"column":25},"end":{"row":53,"column":29},"action":"insert","lines":["todo"]}],[{"start":{"row":50,"column":0},"end":{"row":50,"column":17},"action":"remove","lines":["  console.log(id)"],"id":128},{"start":{"row":49,"column":44},"end":{"row":50,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":48,"column":0},"end":{"row":49,"column":0},"action":"insert","lines":["",""],"id":129},{"start":{"row":49,"column":0},"end":{"row":50,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":49,"column":0},"end":{"row":49,"column":1},"action":"insert","lines":["e"],"id":130},{"start":{"row":49,"column":1},"end":{"row":49,"column":2},"action":"insert","lines":["x"]},{"start":{"row":49,"column":2},"end":{"row":49,"column":3},"action":"insert","lines":["p"]},{"start":{"row":49,"column":3},"end":{"row":49,"column":4},"action":"insert","lines":["o"]},{"start":{"row":49,"column":4},"end":{"row":49,"column":5},"action":"insert","lines":["r"]},{"start":{"row":49,"column":5},"end":{"row":49,"column":6},"action":"insert","lines":["t"]}],[{"start":{"row":49,"column":6},"end":{"row":49,"column":7},"action":"insert","lines":[" "],"id":131},{"start":{"row":49,"column":7},"end":{"row":49,"column":8},"action":"insert","lines":["c"]},{"start":{"row":49,"column":8},"end":{"row":49,"column":9},"action":"insert","lines":["o"]},{"start":{"row":49,"column":9},"end":{"row":49,"column":10},"action":"insert","lines":["n"]},{"start":{"row":49,"column":10},"end":{"row":49,"column":11},"action":"insert","lines":["s"]},{"start":{"row":49,"column":11},"end":{"row":49,"column":12},"action":"insert","lines":["t"]}],[{"start":{"row":49,"column":12},"end":{"row":49,"column":13},"action":"insert","lines":[" "],"id":132},{"start":{"row":49,"column":13},"end":{"row":49,"column":14},"action":"insert","lines":["u"]}],[{"start":{"row":49,"column":0},"end":{"row":49,"column":14},"action":"remove","lines":["export const u"],"id":133},{"start":{"row":49,"column":0},"end":{"row":56,"column":0},"action":"insert","lines":["export const createTodo = (todo, history) => {","  return async (dispatch) => {","    const { data: created } = await axios.post('/api/todos', todo);","    dispatch(_createTodo(created));","    history.push('/');","  };","};",""]}],[{"start":{"row":49,"column":13},"end":{"row":49,"column":19},"action":"remove","lines":["create"],"id":134},{"start":{"row":49,"column":13},"end":{"row":49,"column":14},"action":"insert","lines":["u"]},{"start":{"row":49,"column":14},"end":{"row":49,"column":15},"action":"insert","lines":["d"]},{"start":{"row":49,"column":15},"end":{"row":49,"column":16},"action":"insert","lines":["p"]}],[{"start":{"row":49,"column":15},"end":{"row":49,"column":16},"action":"remove","lines":["p"],"id":135},{"start":{"row":49,"column":14},"end":{"row":49,"column":15},"action":"remove","lines":["d"]}],[{"start":{"row":49,"column":14},"end":{"row":49,"column":15},"action":"insert","lines":["p"],"id":136},{"start":{"row":49,"column":15},"end":{"row":49,"column":16},"action":"insert","lines":["d"]},{"start":{"row":49,"column":16},"end":{"row":49,"column":17},"action":"insert","lines":["a"]},{"start":{"row":49,"column":17},"end":{"row":49,"column":18},"action":"insert","lines":["t"]},{"start":{"row":49,"column":18},"end":{"row":49,"column":19},"action":"insert","lines":["e"]}],[{"start":{"row":51,"column":18},"end":{"row":51,"column":25},"action":"remove","lines":["created"],"id":137},{"start":{"row":51,"column":18},"end":{"row":51,"column":19},"action":"insert","lines":["t"]},{"start":{"row":51,"column":19},"end":{"row":51,"column":20},"action":"insert","lines":["o"]},{"start":{"row":51,"column":20},"end":{"row":51,"column":21},"action":"insert","lines":["d"]},{"start":{"row":51,"column":21},"end":{"row":51,"column":22},"action":"insert","lines":["o"]}],[{"start":{"row":52,"column":25},"end":{"row":52,"column":32},"action":"remove","lines":["created"],"id":138},{"start":{"row":52,"column":25},"end":{"row":52,"column":26},"action":"insert","lines":["t"]},{"start":{"row":52,"column":26},"end":{"row":52,"column":27},"action":"insert","lines":["o"]},{"start":{"row":52,"column":27},"end":{"row":52,"column":28},"action":"insert","lines":["d"]},{"start":{"row":52,"column":28},"end":{"row":52,"column":29},"action":"insert","lines":["o"]}],[{"start":{"row":52,"column":15},"end":{"row":52,"column":24},"action":"remove","lines":["reateTodo"],"id":139},{"start":{"row":52,"column":14},"end":{"row":52,"column":15},"action":"remove","lines":["c"]}],[{"start":{"row":52,"column":14},"end":{"row":52,"column":15},"action":"insert","lines":["u"],"id":140},{"start":{"row":52,"column":15},"end":{"row":52,"column":16},"action":"insert","lines":["p"]}],[{"start":{"row":52,"column":16},"end":{"row":52,"column":17},"action":"insert","lines":["d"],"id":141},{"start":{"row":52,"column":17},"end":{"row":52,"column":18},"action":"insert","lines":["a"]},{"start":{"row":52,"column":18},"end":{"row":52,"column":19},"action":"insert","lines":["t"]},{"start":{"row":52,"column":19},"end":{"row":52,"column":20},"action":"insert","lines":["e"]},{"start":{"row":52,"column":20},"end":{"row":52,"column":21},"action":"insert","lines":["T"]},{"start":{"row":52,"column":21},"end":{"row":52,"column":22},"action":"insert","lines":["o"]}],[{"start":{"row":52,"column":22},"end":{"row":52,"column":23},"action":"insert","lines":["d"],"id":142},{"start":{"row":52,"column":23},"end":{"row":52,"column":24},"action":"insert","lines":["o"]}],[{"start":{"row":30,"column":0},"end":{"row":31,"column":0},"action":"insert","lines":["",""],"id":143},{"start":{"row":31,"column":0},"end":{"row":32,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":31,"column":0},"end":{"row":36,"column":2},"action":"insert","lines":["const _setTodos = (todos) => {","  return {","    type: SET_TODOS,","    todos,","  };","};"],"id":144}],[{"start":{"row":31,"column":7},"end":{"row":31,"column":15},"action":"remove","lines":["setTodos"],"id":145},{"start":{"row":31,"column":7},"end":{"row":31,"column":8},"action":"insert","lines":["u"]},{"start":{"row":31,"column":8},"end":{"row":31,"column":9},"action":"insert","lines":["p"]},{"start":{"row":31,"column":9},"end":{"row":31,"column":10},"action":"insert","lines":["d"]},{"start":{"row":31,"column":10},"end":{"row":31,"column":11},"action":"insert","lines":["a"]},{"start":{"row":31,"column":11},"end":{"row":31,"column":12},"action":"insert","lines":["t"]},{"start":{"row":31,"column":12},"end":{"row":31,"column":13},"action":"insert","lines":["e"]}],[{"start":{"row":31,"column":13},"end":{"row":31,"column":14},"action":"insert","lines":["T"],"id":146},{"start":{"row":31,"column":14},"end":{"row":31,"column":15},"action":"insert","lines":["o"]},{"start":{"row":31,"column":15},"end":{"row":31,"column":16},"action":"insert","lines":["d"]},{"start":{"row":31,"column":16},"end":{"row":31,"column":17},"action":"insert","lines":["o"]},{"start":{"row":31,"column":17},"end":{"row":31,"column":18},"action":"insert","lines":["s"]}],[{"start":{"row":26,"column":10},"end":{"row":26,"column":19},"action":"remove","lines":["SET_TODOS"],"id":147},{"start":{"row":26,"column":10},"end":{"row":26,"column":21},"action":"insert","lines":["UPDATE_TODO"]}],[{"start":{"row":59,"column":24},"end":{"row":59,"column":25},"action":"insert","lines":["s"],"id":148}],[{"start":{"row":58,"column":56},"end":{"row":58,"column":62},"action":"remove","lines":[", todo"],"id":149}],[{"start":{"row":58,"column":55},"end":{"row":58,"column":56},"action":"insert","lines":["$"],"id":150},{"start":{"row":58,"column":56},"end":{"row":58,"column":57},"action":"insert","lines":["{"]},{"start":{"row":58,"column":57},"end":{"row":58,"column":58},"action":"insert","lines":["}"]}],[{"start":{"row":58,"column":58},"end":{"row":58,"column":59},"action":"remove","lines":["'"],"id":151}],[{"start":{"row":58,"column":58},"end":{"row":58,"column":59},"action":"insert","lines":["`"],"id":152}],[{"start":{"row":58,"column":44},"end":{"row":58,"column":45},"action":"remove","lines":["'"],"id":153}],[{"start":{"row":58,"column":44},"end":{"row":58,"column":45},"action":"insert","lines":["`"],"id":154}],[{"start":{"row":58,"column":57},"end":{"row":58,"column":58},"action":"insert","lines":["c"],"id":155},{"start":{"row":58,"column":58},"end":{"row":58,"column":59},"action":"insert","lines":["r"]},{"start":{"row":58,"column":59},"end":{"row":58,"column":60},"action":"insert","lines":["e"]},{"start":{"row":58,"column":60},"end":{"row":58,"column":61},"action":"insert","lines":["a"]},{"start":{"row":58,"column":61},"end":{"row":58,"column":62},"action":"insert","lines":["t"]}],[{"start":{"row":58,"column":61},"end":{"row":58,"column":62},"action":"remove","lines":["t"],"id":156},{"start":{"row":58,"column":60},"end":{"row":58,"column":61},"action":"remove","lines":["a"]},{"start":{"row":58,"column":59},"end":{"row":58,"column":60},"action":"remove","lines":["e"]},{"start":{"row":58,"column":58},"end":{"row":58,"column":59},"action":"remove","lines":["r"]},{"start":{"row":58,"column":57},"end":{"row":58,"column":58},"action":"remove","lines":["c"]}],[{"start":{"row":58,"column":57},"end":{"row":58,"column":58},"action":"insert","lines":["i"],"id":157},{"start":{"row":58,"column":58},"end":{"row":58,"column":59},"action":"insert","lines":["d"]}],[{"start":{"row":58,"column":39},"end":{"row":58,"column":43},"action":"remove","lines":["post"],"id":158},{"start":{"row":58,"column":39},"end":{"row":58,"column":40},"action":"insert","lines":["p"]},{"start":{"row":58,"column":40},"end":{"row":58,"column":41},"action":"insert","lines":["u"]},{"start":{"row":58,"column":41},"end":{"row":58,"column":42},"action":"insert","lines":["t"]}],[{"start":{"row":58,"column":56},"end":{"row":58,"column":58},"action":"remove","lines":["id"],"id":159},{"start":{"row":58,"column":56},"end":{"row":58,"column":57},"action":"insert","lines":["t"]},{"start":{"row":58,"column":57},"end":{"row":58,"column":58},"action":"insert","lines":["o"]},{"start":{"row":58,"column":58},"end":{"row":58,"column":59},"action":"insert","lines":["d"]},{"start":{"row":58,"column":59},"end":{"row":58,"column":60},"action":"insert","lines":["o"]}],[{"start":{"row":26,"column":0},"end":{"row":33,"column":0},"action":"remove","lines":["    type: UPDATE_TODO,","    todos,","  };","};","","const _updateTodos = (todos) => {","  return {",""],"id":160,"ignore":true},{"start":{"row":41,"column":0},"end":{"row":66,"column":0},"action":"remove","lines":["// export const deleteTodo = (id) => {","//   return async (dispatch) => {","//     const { data } = await axios.delete(`/api/todos/${id}`);","//     dispatch(_deleteTodo(data));","    ","//   };","// };","","export const updateTodo = (todo, history) => {","  return async (dispatch) => {","    const { data: todo } = await axios.put(`/api/todos${todo}`);","    dispatch(_updateTodos(todo));","    history.push('/');","  };","};","","","export const deleteTodo = (id, history) => {","  return async (dispatch) => {","    const { data: todo } = await axios.delete(`/api/todos/${id}`);","    dispatch(_deleteTodo(todo));","    history.push('/');","  };","};","",""]}]]},"ace":{"folds":[],"scrolltop":635,"scrollleft":0,"selection":{"start":{"row":41,"column":13},"end":{"row":41,"column":23},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":37,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1657307462047,"hash":"08245a5ec60c43a60bcb7ad0afd5f054c2f61e16"}