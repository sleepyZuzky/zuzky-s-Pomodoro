import styles from './styles.module.css';
import { ChangeEvent, useEffect } from 'react';

interface RadioType {
  options: { name: string, values: any[] },
  canHide?: boolean
}

export default function RadioInput ({options, canHide = false}: RadioType) {
  useEffect(() => {
    const div: HTMLElement | null = document.getElementById(`radio_${options.name}`);
    const container: HTMLElement | null = div ? div.parentElement : null;
    const containerChildren: HTMLCollection | null = container ? container.children : null;
    const checks: boolean[] = [];
    
    if (containerChildren !== null) {
      for (const child of containerChildren) {
        if (child.children.length > 2) {
          const inputOption: HTMLInputElement = child['children'][0] as HTMLInputElement;
          checks.push(inputOption.checked);
        }
      }

      const hasChildrens: boolean = containerChildren.length > 0;
      const containerHasChildrens: boolean = containerChildren[0].children.length > 0;
      const everyCheckIsFalse: boolean = checks.every((check: boolean) => !check)
      
      if (hasChildrens && containerHasChildrens && everyCheckIsFalse) {
        const inputOption: HTMLInputElement = containerChildren[0]['children'][0] as HTMLInputElement;
        inputOption.checked = true;
        return;
      }
      
      for (const child of containerChildren) {
        if (child.children.length > 2) {
          const inputOption: HTMLInputElement = child.children[0] as HTMLInputElement;
          const label: HTMLElement = child.children[1] as HTMLElement;
          
          if (label.getAttribute('data-can-hide') === 'true') {
            label.style['display'] = inputOption.checked ? 'inline-block' : 'none';
          } else {
            label.style['color'] = inputOption.checked ? '#fff' : '#1E213F';
            inputOption.style['backgroundColor'] = inputOption.checked ? '#161932' : '#EFF1FA';
          }
        }
      }
    }
  }, [options.name]);
  
  const handleChange = (input: HTMLInputElement): void => {
    const div: HTMLElement | null = input.parentElement;
    const container: HTMLElement | null = div ? div.parentElement : null;
    
    if (container !== null) {
      for (const child of container.children) {
        if (child.children.length > 2) {
          const inputOption: HTMLInputElement = child.children[0] as HTMLInputElement;
          const label: HTMLElement = child.children[1] as HTMLElement;
          
          if (label.getAttribute('data-can-hide') === 'true') {
            label.style['display'] = inputOption.checked ? 'inline-block' : 'none';
          } else {
            label.style['color'] = inputOption.checked ? '#fff' : '#1E213F';
            inputOption.style['backgroundColor'] = inputOption.checked ? '#161932' : '#EFF1FA';
          }
        }
      }
    }
  }
  
  options.values = options?.values ? options.values : [];
  
  return <>
    {
      options.values.map((option) => {
        const inputStyle = option.styles ? option.styles : {};
        const labelStyles = option.labelStyles ? option.labelStyles : {};
        
        return <div key={`radio_${option.id}`} id={`radio_${options.name}`} className={styles.radio_container}>
          <input
            style={inputStyle}
            className={[styles.custom_radio, 'cursor-pointer'].join(' ')}
            type="radio"
            id={option.id}
            name={options.name}
            value={option.value}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e.target)}
            checked={option.checked}/>
          
          <label htmlFor={option.id}
                 style={labelStyles}
                 className={'cursor-pointer'}
                 data-can-hide={canHide}>
            {option.label}
          </label>
        </div>
      })
    }
  </>
}
