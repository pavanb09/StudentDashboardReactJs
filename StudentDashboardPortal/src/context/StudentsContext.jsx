import React, { createContext, useReducer, useEffect } from "react";
import axios from "axios";

export const StudentsContext = createContext();

const initialState = {
  students: [],
  loading: false,
  error: null
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, students: action.payload };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    case "ADD_STUDENT":
      return { ...state, students: [action.payload, ...state.students] };
    case "UPDATE_STUDENT":
      return {
        ...state,
        students: state.students.map(s => s.id === action.payload.id ? action.payload : s)
      };
    case "REMOVE_STUDENT":
      return { ...state, students: state.students.filter(s => s.id !== action.payload) };
    default:
      return state;
  }
}

export function StudentsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let mounted = true;
    dispatch({ type: "FETCH_START" });

    axios.get("https://dummyjson.com/users?limit=20")
      .then(res => {
        if (!mounted) return;
        const data = res.data;
        const students = (data?.users || []).map(u => ({
          id: String(u.id),
          name: `${u.firstName} ${u.lastName}`,
          email: u.email,
          course: u.company?.department || "General",
          image: u.image || null,
          phone: u.phone || ""
        }));
        dispatch({ type: "FETCH_SUCCESS", payload: students });
      })
      .catch(err => {
        if (!mounted) return;
        const msg = err?.message || "Failed to fetch";
        dispatch({ type: "FETCH_ERROR", payload: msg });
      });

    return () => { mounted = false; };
  }, []);

  return (
    <StudentsContext.Provider value={{ state, dispatch }}>
      {children}
    </StudentsContext.Provider>
  );
}
