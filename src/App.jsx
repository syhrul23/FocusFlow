import { useEffect, useMemo, useState } from "react";
import {
  Plus,
  Trash2,
  Moon,
  Sun,
  CheckCircle2,
  Timer,
  Sparkles,
  CalendarDays,
  Bot,
  Flame,
  Play,
  Pause,
} from "lucide-react";

export default function ModernVibeTodoApp() {
  const [darkMode, setDarkMode] = useState(true);
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState("all");
  const [quoteIndex, setQuoteIndex] = useState(0);

  const quotes = [
    "Small progress is still progress 😌",
    "Focus beats motivation every time 🚀",
    "Discipline creates freedom 🔥",
    "One task at a time ✨",
  ];
  const [seconds, setSeconds] = useState(1500);
  const [isRunning, setIsRunning] = useState(false);
  

  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("vibe-todos");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            text: "belajar coding",
            completed: false,
          },
          {
            id: 2,
            text: "Ngaji Ngaji",
            completed: true,
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("vibe-todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    let interval;

    if (isRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  const addTodo = () => {
    if (!task.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTodos([newTodo, ...todos]);
    setTask("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = useMemo(() => {
    if (filter === "active") {
      return todos.filter((todo) => !todo.completed);
    }

    if (filter === "completed") {
      return todos.filter((todo) => todo.completed);
    }

    return todos;
  }, [todos, filter]);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const progress = todos.length
    ? Math.round(
        (todos.filter((todo) => todo.completed).length / todos.length) * 100
      )
    : 0;

  

  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const remainingSeconds = String(seconds % 60).padStart(2, "0");

  return (
    <div
      className={`min-h-screen transition-all duration-500 relative overflow-hidden ${
        darkMode
          ? "bg-[#03110a] text-white"
          : "bg-cyan-50 text-zinc-900"
      }`}
    >
      
      <div
        className={`absolute inset-0 opacity-40 ${
          darkMode
            ? "bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.25),transparent_40%),radial-gradient(circle_at_bottom,_rgba(236,72,153,0.2),transparent_35%)]"
            : "bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.15),transparent_40%),radial-gradient(circle_at_bottom,_rgba(236,72,153,0.12),transparent_35%)]"
        }`}
      />
      
      

      <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-400/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute top-1/4 right-20 w-80 h-80 bg-emerald-400/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-green-500/20 blur-3xl rounded-full animate-bounce" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-teal-400/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
  {[...Array(40)].map((_, i) => (
    <div
      key={i}
      className="absolute text-green-400 animate-pulse"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${2 + Math.random() * 5}s`,
        fontSize: `${12 + Math.random() * 20}px`,
      }}
    >
      {Math.random() > 0.5 ? "1" : "0"}
    </div>
  ))}
</div>

<div className="absolute inset-0 overflow-hidden pointer-events-none">
  {[...Array(25)].map((_, i) => (
    <div
      key={i}
      className="absolute bg-emerald-400/20 rounded-full animate-ping"
      style={{
        width: `${5 + Math.random() * 10}px`,
        height: `${5 + Math.random() * 10}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${3 + Math.random() * 5}s`,
      }}
    />
  ))}
</div>

      <div className="max-w-5xl mx-auto p-6 md:p-10 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-10 gap-6">
          <div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight">
              FocusFlow
            </h1>
            <p
              className={`mt-3 text-lg ${
                darkMode ? "text-zinc-400" : "text-zinc-600"
              }`}
            >
              Todo App modern ala Ryshaa 🚀
            </p>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-4 rounded-2xl border transition-all duration-300 ${
              darkMode
                ? "bg-black/30 backdrop-blur-2xl border-zinc-800 hover:border-emerald-400"
                : "bg-white border-zinc-300 hover:border-violet-400"
            }`}
          >
            {darkMode ? <Sun /> : <Moon />}
          </button>
        </div>

        <div
          className={`rounded-[2rem] p-6 md:p-8 border backdrop-blur-xl mb-8 transition-all duration-500 ${
            darkMode
              ? "bg-black/30 backdrop-blur-2xl/70 border-zinc-800"
              : "bg-white/80 border-zinc-200"
          }`}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              value={task}
              onChange={(e) => setTask(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addTodo()}
              placeholder="Tambah task baru..."
              className={`flex-1 px-6 py-4 rounded-2xl outline-none border transition-all duration-300 ${
                darkMode
                  ? "bg-black border-zinc-700 focus:border-emerald-400"
                  : "bg-zinc-100 border-zinc-300 focus:border-violet-400"
              }`}
            />

            <button
              onClick={addTodo}
              className="bg-emerald-500 hover:bg-emerald-400 transition-all duration-300 rounded-2xl px-6 py-4 font-bold flex items-center justify-center gap-2"
            >
              <Plus size={20} />
              Add Task
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Task"
            value={todos.length}
            darkMode={darkMode}
          />

          <StatCard
            title="Completed"
            value={todos.filter((todo) => todo.completed).length}
            darkMode={darkMode}
          />

          <StatCard
            title="Progress"
            value={`${progress}%`}
            darkMode={darkMode}
          />

          <div
            className={`rounded-[2rem] p-6 border transition-all duration-300 ${
              darkMode
                ? "bg-black/30 backdrop-blur-2xl border-zinc-800"
                : "bg-white border-zinc-200"
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <Timer className="text-emerald-400" />
              <p className={darkMode ? "text-zinc-400" : "text-zinc-500"}>
                Pomodoro
              </p>
            </div>

            <h2 className="text-4xl font-black mb-5">
              {minutes}:{remainingSeconds}
            </h2>

            <button
              onClick={() => setIsRunning(!isRunning)}
              className="bg-emerald-500 hover:bg-emerald-400 transition-all duration-300 px-5 py-3 rounded-2xl font-bold"
            >
              {isRunning ? "Pause" : "Start"}
            </button>
          </div>
        </div>

        <div
          className={`rounded-[2rem] p-6 border mb-8 ${
            darkMode
              ? "bg-black/30 backdrop-blur-2xl border-zinc-800"
              : "bg-white border-zinc-200"
          }`}
        >
          <div className="flex flex-wrap gap-3">
            {[
              { key: "all", label: "All" },
              { key: "active", label: "Active" },
              { key: "completed", label: "Completed" },
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => setFilter(item.key)}
                className={`px-5 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  filter === item.key
                    ? "bg-emerald-500 text-white"
                    : darkMode
                    ? "bg-black border border-zinc-700 text-zinc-300"
                    : "bg-zinc-100 border border-zinc-300 text-zinc-700"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="text-emerald-400" />
            <h2 className="text-xl font-bold">Daily Motivation</h2>
          </div>

          <p className="text-2xl md:text-3xl font-black tracking-tight transition-all duration-500">
            {quotes[quoteIndex]}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <div
            className={`rounded-[2rem] p-6 border ${
              darkMode
                ? "bg-black/30 backdrop-blur-2xl border-zinc-800"
                : "bg-white border-zinc-200"
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              
              <h2 className="text-2xl font-black">Focus Level</h2>
            </div>

            <div className="flex gap-3 mb-6">
              {[1,2,3,4,5].map((level) => (
                <div
                  key={level}
                  className={`flex-1 h-4 rounded-full transition-all duration-500 ${
                    level <= 3
                      ? "bg-gradient-to-r from-cyan-400 to-emerald-400"
                      : darkMode
                      ? "bg-zinc-800"
                      : "bg-zinc-200"
                  }`}
                />
              ))}
            </div>

            <div className="px-4 py-2 rounded-2xl bg-cyan-500 text-white font-bold inline-block mb-4">
              Level 3 Focus
            </div>

            <p className={darkMode ? "text-zinc-400" : "text-zinc-600"}>
              Semakin banyak task selesai, semakin tinggi focus level kamu 🚀
            </p>
          </div>

          <div
            className={`rounded-[2rem] p-6 border ${
              darkMode
                ? "bg-black/30 backdrop-blur-2xl border-zinc-800"
                : "bg-white border-zinc-200"
            }`}
          >
            <div className="flex items-center gap-3 mb-5">
              <CalendarDays className="text-cyan-400" />
              <h2 className="text-xl font-bold">Weekly Progress</h2>
            </div>

            <div className="space-y-4">
              {[
                progress,
                Math.max(progress - 10, 5),
                Math.min(progress + 15, 100),
                Math.max(progress - 20, 10),
                Math.min(progress + 5, 100),
              ].map((value, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2 text-sm">
                    <span>Day {index + 1}</span>
                    <span>{value}%</span>
                  </div>

                  <div
                    className={`h-3 rounded-full overflow-hidden ${
                      darkMode ? "bg-black" : "bg-zinc-200"
                    }`}
                  >
                    <div
                      className="h-full bg-violet-500 rounded-full transition-all duration-500"
                      style={{ width: `${value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

<div
  className={`rounded-[2rem] p-6 border mb-8 ${
    darkMode
      ? "bg-black/30 backdrop-blur-2xl/70 border-emerald-500/10"
      : "bg-white border-emerald-200"
  }`}
>
  <div className="flex items-center gap-3 mb-4">
    <Bot className="text-emerald-400" />
    <h2 className="text-2xl font-black">AI Study Assistant</h2>
  </div>

  <div
    className={`rounded-2xl p-5 ${
      darkMode ? "bg-black/40" : "bg-zinc-100"
    }`}
  >
    <p className={darkMode ? "text-zinc-300" : "text-zinc-700"}>
      😌 Focus recommendation:
      <br />
      Selesaikan 3 task kecil terlebih dahulu sebelum mulai task besar.
    </p>
  </div>
</div>

        <div className="space-y-4">
          {filteredTodos.length === 0 ? (
            <div
              className={`rounded-[2rem] p-10 text-center border ${
                darkMode
                  ? "bg-black/30 backdrop-blur-2xl border-zinc-800"
                  : "bg-white border-zinc-200"
              }`}
            >
              <CheckCircle2 className="mx-auto mb-4 text-violet-500" size={48} />
              <h2 className="text-2xl font-bold mb-2">Tidak ada task 😌</h2>
              <p className={darkMode ? "text-zinc-400" : "text-zinc-600"}>
                Tambahkan task baru untuk mulai produktif.
              </p>
            </div>
          ) : (
            filteredTodos.map((todo) => (
              <div
                key={todo.id}
                className={`group rounded-[2rem] p-6 border transition-all duration-300 hover:-translate-y-1 ${
                  darkMode
                    ? "bg-black/30 backdrop-blur-2xl border-zinc-800 hover:border-emerald-400/50"
                    : "bg-white border-zinc-200 hover:border-violet-400"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => toggleTodo(todo.id)}
                      className={`w-7 h-7 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                        todo.completed
                          ? "bg-violet-500 border-emerald-400"
                          : darkMode
                          ? "border-zinc-600"
                          : "border-zinc-400"
                      }`}
                    >
                      {todo.completed && (
                        <CheckCircle2 size={16} className="text-white" />
                      )}
                    </button>

                    <div>
                      <p
                        className={`text-lg font-medium transition-all duration-300 ${
                          todo.completed
                            ? "line-through text-zinc-500"
                            : ""
                        }`}
                      >
                        {todo.text}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-red-400 hover:text-red-300"
                  >
                    <Trash2 />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, darkMode }) {
  return (
    <div
      className={`rounded-[2rem] p-6 border transition-all duration-300 ${
        darkMode
          ? "bg-black/30 backdrop-blur-2xl border-zinc-800"
          : "bg-white border-zinc-200"
      }`}
    >
      <p className={darkMode ? "text-zinc-400" : "text-zinc-500"}>
        {title}
      </p>

      <h2 className="text-4xl font-black mt-3">{value}</h2>
    </div>
  );

  <div className="absolute inset-0 overflow-hidden pointer-events-none">
  {[...Array(60)].map((_, i) => (
    <div
      key={i}
      className="absolute bg-white rounded-full animate-pulse"
      style={{
        width: `${Math.random() * 3}px`,
        height: `${Math.random() * 3}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        opacity: Math.random(),
      }}
    />
  ))}
</div>
}
