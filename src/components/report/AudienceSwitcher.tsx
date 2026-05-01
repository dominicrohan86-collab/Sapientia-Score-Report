import type { AudienceMode } from '../../types/report';
import { SegmentedControl } from '../ui/SegmentedControl';

interface AudienceSwitcherProps {
  value: AudienceMode;
  onChange: (mode: AudienceMode) => void;
}

export function AudienceSwitcher({ value, onChange }: AudienceSwitcherProps) {
  return (
    <SegmentedControl
      label="Audience mode"
      onChange={onChange}
      options={[
        {
          value: 'student',
          label: 'Student View',
          description: 'Direct next steps'
        },
        {
          value: 'parent',
          label: 'Parent View',
          description: 'Conversation support'
        },
        {
          value: 'advisor',
          label: 'Advisor View',
          description: 'Planning notes'
        }
      ]}
      value={value}
    />
  );
}
