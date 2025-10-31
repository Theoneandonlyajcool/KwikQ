import {
  Card,
  CardContent,
  IconWrapper,
  TextContent,
  Label,
  Value,
  Change,
} from "./StatCard.styles";

export const StatCard = ({
  icon,
  iconBgColor,
  iconColor,
  label,
  value,
  change,
  changeType,
}) => {
  return (
    <Card>
      <CardContent>
        <IconWrapper bgColor={iconBgColor} color={iconColor}>
          {icon}
        </IconWrapper>
        <TextContent>
          <Label>{label}</Label>
          <Value>{value}</Value>
          <Change type={changeType}>{change}</Change>
        </TextContent>
      </CardContent>
    </Card>
  );
};