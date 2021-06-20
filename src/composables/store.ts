/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { reactive } from 'vue';
import { projects, Project } from '@/data/projects';

enum State {
  Projects = 'projects',
  Project = 'project',
}

interface DataState<T> {
  loading: boolean;
  error: boolean;
  data: T;
}
interface StateObject {
  [key: string]: DataState<any>;
}

const state = reactive<StateObject>({
  [State.Projects]: {
    loading: false,
    error: false,
    data: projects,
  },
  [State.Project]: {
    loading: false,
    error: false,
    data: null,
  },
});

export const useStore = () => {
  const projects: DataState<Project[]> = state[State.Projects];
  const project: DataState<Project> = state[State.Project];

  const setLoading = (stateKey: State, loadingState: boolean) => {
    state[stateKey].error = false;
    state[stateKey].loading = loadingState;
  };

  const setError = (stateKey: State, err: any) => {
    state[stateKey].error = true;
    state[stateKey].loading = false;
    console.error(err);
  };

  const setData = (stateKey: State, data: any) => {
    state[stateKey].error = false;
    state[stateKey].loading = false;
    state[stateKey].data = data;
  };

  const executeAction = async (stateKey: State, callback: () => void): Promise<void> => {
    try {
      setLoading(stateKey, true);
      await callback();
    } catch (err) {
      setError(stateKey, err);
    }
  };

  const getProject = (id: string): void => {
    const stateKey = State.Project;
    executeAction(stateKey, () => {
      setData(stateKey, projects.data.find((project) => project.id === id));
    });
  };

  return {
    // getters
    projects,
    project,
    // actions
    getProject,
  };
};
