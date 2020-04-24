/* eslint-disable import/no-duplicates */
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const formatDateDay = (value: string): string =>
  format(parseISO(value), 'P', {
    locale: ptBR,
  });

export default formatDateDay;
