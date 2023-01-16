/**
 * 分页信息
 */
interface PageInfo<T> {
  current: number;
  size: number;
  total: number;
  records: T[];
}

/**
 * 分页请求
 */
interface PageRequest {
  current?: number;
  pageSize?: number;
  sortField?: string;
  sortOrder?: 'ascend' | 'descend';
}

/**
 * 返回封装
 */
interface ResponseStructure<T> {
  success: boolean;
  data: T;
  errorCode?: number;
  errorMessage?: string;
}
